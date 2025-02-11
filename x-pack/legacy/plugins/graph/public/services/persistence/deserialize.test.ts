/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { GraphWorkspaceSavedObject } from '../../types';
import { savedWorkspaceToAppState } from './deserialize';
import { IndexPattern } from 'src/legacy/core_plugins/data/public';
import { createWorkspace } from '../../angular/graph_client_workspace';
import { outlinkEncoders } from '../outlink_encoders';

describe('deserialize', () => {
  let savedWorkspace: GraphWorkspaceSavedObject;

  beforeEach(() => {
    savedWorkspace = {
      title: '',
      description: '',
      numLinks: 2,
      numVertices: 4,
      wsState: JSON.stringify({
        indexPattern: 'Testindexpattern',
        selectedFields: [
          { color: 'black', name: 'field1', selected: true, iconClass: 'a' },
          { color: 'black', name: 'field2', selected: true, iconClass: 'b' },
        ],
        blacklist: [
          {
            color: 'black',
            label: 'Z',
            x: 1,
            y: 2,
            field: 'field1',
            term: 'Z',
            parent: null,
            size: 10,
          },
        ],
        vertices: [
          {
            color: 'black',
            label: 'A',
            x: 1,
            y: 2,
            field: 'field1',
            term: 'A',
            parent: null,
            size: 10,
          },
          {
            color: 'black',
            label: 'B',
            x: 3,
            y: 4,
            field: 'field1',
            term: 'B',
            parent: 2,
            size: 10,
          },
          {
            color: 'black',
            label: 'B',
            x: 5,
            y: 6,
            field: 'field1',
            term: 'C',
            parent: null,
            size: 10,
          },
          {
            color: 'black',
            label: 'D',
            x: 7,
            y: 8,
            field: 'field2',
            term: 'D',
            parent: 2,
            size: 10,
          },
          {
            color: 'black',
            label: 'E',
            x: 9,
            y: 10,
            field: 'field2',
            term: 'E',
            parent: null,
            size: 10,
          },
        ],
        links: [
          { inferred: false, label: '', weight: 5, width: 5, source: 2, target: 0 },
          { inferred: false, label: '', weight: 5, width: 5, source: 2, target: 4 },
        ],
        urlTemplates: [
          {
            description: 'Template',
            url: 'test-url',
            encoderID: 'kql-loose',
            iconClass: 'd',
          },
        ],
        exploreControls: {
          useSignificance: true,
          sampleSize: 1000,
          timeoutMillis: 5000,
          maxValuesPerDoc: 1,
          minDocCount: 3,
        },
      }),
    } as GraphWorkspaceSavedObject;
  });

  function callSavedWorkspaceToAppState() {
    return savedWorkspaceToAppState(
      savedWorkspace,
      {
        getNonScriptedFields: () => [{ name: 'field1' }, { name: 'field2' }, { name: 'field3' }],
      } as IndexPattern,
      createWorkspace({})
    );
  }

  it('should deserialize settings', () => {
    const { advancedSettings } = callSavedWorkspaceToAppState();

    expect(advancedSettings.sampleSize).toEqual(1000);
  });

  it('should deserialize fields', () => {
    const { allFields, selectedFields } = callSavedWorkspaceToAppState();

    expect(allFields).toMatchInlineSnapshot(`
      Array [
        Object {
          "color": "black",
          "hopSize": undefined,
          "icon": undefined,
          "lastValidHopSize": undefined,
          "name": "field1",
          "selected": true,
        },
        Object {
          "color": "black",
          "hopSize": undefined,
          "icon": undefined,
          "lastValidHopSize": undefined,
          "name": "field2",
          "selected": true,
        },
        Object {
          "color": "#8ee684",
          "hopSize": 5,
          "icon": Object {
            "class": "fa-folder-open-o",
            "code": "",
            "label": "folder open",
            "patterns": Array [
              /category/i,
              /folder/i,
              /group/i,
            ],
          },
          "lastValidHopSize": 5,
          "name": "field3",
          "selected": false,
        },
      ]
    `);

    expect(selectedFields.length).toEqual(2);
    selectedFields.forEach(field => expect(allFields.includes(field)).toEqual(true));
  });

  it('should deserialize url templates', () => {
    const { urlTemplates } = callSavedWorkspaceToAppState();

    expect(urlTemplates[0].description).toBe('Template');
    expect(urlTemplates[0].encoder).toBe(outlinkEncoders[0]);
  });

  it('should deserialize nodes and edges', () => {
    const { workspace } = callSavedWorkspaceToAppState();

    expect(workspace.blacklistedNodes.length).toEqual(1);
    expect(workspace.nodes.length).toEqual(5);
    expect(workspace.edges.length).toEqual(2);

    // C is parent of B and D
    expect(workspace.nodes[3].parent).toBe(workspace.nodes[2]);
    expect(workspace.nodes[1].parent).toBe(workspace.nodes[2]);

    // A <-> C
    expect(workspace.edges[0].source).toBe(workspace.nodes[2]);
    expect(workspace.edges[0].target).toBe(workspace.nodes[0]);

    // C <-> E
    expect(workspace.edges[1].source).toBe(workspace.nodes[2]);
    expect(workspace.edges[1].target).toBe(workspace.nodes[4]);
  });
});
