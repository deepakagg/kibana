var __kbnBundles__=typeof __kbnBundles__==="object"?__kbnBundles__:{};__kbnBundles__["security-customerror"]=function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var executeModules=data[2];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(installedChunks[chunkId]){resolves.push(installedChunks[chunkId][0])}installedChunks[chunkId]=0}for(moduleId in moreModules){if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){modules[moduleId]=moreModules[moduleId]}}if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length){resolves.shift()()}deferredModules.push.apply(deferredModules,executeModules||[]);return checkDeferredModules()}function checkDeferredModules(){var result;for(var i=0;i<deferredModules.length;i++){var deferredModule=deferredModules[i];var fulfilled=true;for(var j=1;j<deferredModule.length;j++){var depId=deferredModule[j];if(installedChunks[depId]!==0)fulfilled=false}if(fulfilled){deferredModules.splice(i--,1);result=__webpack_require__(__webpack_require__.s=deferredModule[0])}}return result}var installedModules={};var installedChunks={337:0};var deferredModules=[];function jsonpScriptSrc(chunkId){return __webpack_require__.p+""+({2:"icon.alert-js",3:"icon.apm_trace-js",4:"icon.app_add_data-js",5:"icon.app_advanced_settings-js",6:"icon.app_apm-js",7:"icon.app_auditbeat-js",8:"icon.app_canvas-js",9:"icon.app_code-js",10:"icon.app_console-js",11:"icon.app_cross_cluster_replication-js",12:"icon.app_dashboard-js",13:"icon.app_devtools-js",14:"icon.app_discover-js",15:"icon.app_ems-js",16:"icon.app_filebeat-js",17:"icon.app_gis-js",18:"icon.app_graph-js",19:"icon.app_grok-js",20:"icon.app_heartbeat-js",21:"icon.app_index_management-js",22:"icon.app_index_pattern-js",23:"icon.app_index_rollup-js",24:"icon.app_infra-js",25:"icon.app_logging-js",26:"icon.app_management-js",27:"icon.app_metricbeat-js",28:"icon.app_ml-js",29:"icon.app_monitoring-js",30:"icon.app_notebook-js",31:"icon.app_packetbeat-js",32:"icon.app_pipeline-js",33:"icon.app_reporting-js",34:"icon.app_saved_objects-js",35:"icon.app_search_profiler-js",36:"icon.app_security-js",37:"icon.app_security_analytics-js",38:"icon.app_spaces-js",39:"icon.app_sql-js",40:"icon.app_timelion-js",41:"icon.app_upgrade_assistant-js",42:"icon.app_uptime-js",43:"icon.app_users_roles-js",44:"icon.app_visualize-js",45:"icon.app_watches-js",46:"icon.apps-js",47:"icon.arrow_down-js",48:"icon.arrow_left-js",49:"icon.arrow_right-js",50:"icon.arrow_up-js",51:"icon.asterisk-js",52:"icon.beaker-js",53:"icon.bell-js",54:"icon.bolt-js",55:"icon.boxes_horizontal-js",56:"icon.boxes_vertical-js",57:"icon.branch-js",58:"icon.broom-js",59:"icon.brush-js",60:"icon.bug-js",61:"icon.bullseye-js",62:"icon.calendar-js",63:"icon.check-js",64:"icon.checkInCircleFilled-js",65:"icon.clock-js",66:"icon.cloudDrizzle-js",67:"icon.cloudStormy-js",68:"icon.cloudSunny-js",69:"icon.compute-js",70:"icon.console-js",71:"icon.controls_horizontal-js",72:"icon.controls_vertical-js",73:"icon.copy-js",74:"icon.copy_clipboard-js",75:"icon.cross-js",76:"icon.crossInACircleFilled-js",77:"icon.crosshairs-js",78:"icon.cut-js",79:"icon.database-js",80:"icon.document-js",81:"icon.documentEdit-js",82:"icon.documents-js",83:"icon.dot-js",84:"icon.editorDistributeHorizontal-js",85:"icon.editorDistributeVertical-js",86:"icon.editorItemAlignBottom-js",87:"icon.editorItemAlignCenter-js",88:"icon.editorItemAlignLeft-js",89:"icon.editorItemAlignMiddle-js",90:"icon.editorItemAlignRight-js",91:"icon.editorItemAlignTop-js",92:"icon.editorPositionBottomLeft-js",93:"icon.editorPositionBottomRight-js",94:"icon.editorPositionTopLeft-js",95:"icon.editorPositionTopRight-js",96:"icon.editor_align_center-js",97:"icon.editor_align_left-js",98:"icon.editor_align_right-js",99:"icon.editor_bold-js",100:"icon.editor_code_block-js",101:"icon.editor_comment-js",102:"icon.editor_heading-js",103:"icon.editor_italic-js",104:"icon.editor_link-js",105:"icon.editor_ordered_list-js",106:"icon.editor_redo-js",107:"icon.editor_strike-js",108:"icon.editor_table-js",109:"icon.editor_underline-js",110:"icon.editor_undo-js",111:"icon.editor_unordered_list-js",112:"icon.email-js",113:"icon.exit-js",114:"icon.expand-js",115:"icon.export-js",116:"icon.eye-js",117:"icon.eye_closed-js",118:"icon.faceNeutral-js",119:"icon.face_happy-js",120:"icon.face_neutral-js",121:"icon.face_sad-js",122:"icon.filter-js",123:"icon.flag-js",124:"icon.folder_closed-js",125:"icon.folder_open-js",126:"icon.full_screen-js",127:"icon.gear-js",128:"icon.glasses-js",129:"icon.globe-js",130:"icon.grab-js",131:"icon.grab_horizontal-js",132:"icon.grid-js",133:"icon.heart-js",134:"icon.heatmap-js",135:"icon.help-js",136:"icon.iInCircle-js",137:"icon.import-js",138:"icon.index_close-js",139:"icon.index_edit-js",140:"icon.index_flush-js",141:"icon.index_mapping-js",142:"icon.index_open-js",143:"icon.index_settings-js",144:"icon.inputOutput-js",145:"icon.inspect-js",146:"icon.invert-js",147:"icon.kql_field-js",148:"icon.kql_function-js",149:"icon.kql_operand-js",150:"icon.kql_selector-js",151:"icon.kql_value-js",152:"icon.link-js",153:"icon.list-js",154:"icon.list_add-js",155:"icon.lock-js",156:"icon.lockOpen-js",157:"icon.logo_aerospike-js",158:"icon.logo_apache-js",159:"icon.logo_apm-js",160:"icon.logo_app_search-js",161:"icon.logo_aws-js",162:"icon.logo_aws_mono-js",163:"icon.logo_azure-js",164:"icon.logo_azure_mono-js",165:"icon.logo_beats-js",166:"icon.logo_business_analytics-js",167:"icon.logo_cloud-js",168:"icon.logo_cloud_ece-js",169:"icon.logo_code-js",170:"icon.logo_codesandbox-js",171:"icon.logo_couchbase-js",172:"icon.logo_docker-js",173:"icon.logo_dropwizard-js",174:"icon.logo_elastic-js",175:"icon.logo_elastic_stack-js",176:"icon.logo_elasticsearch-js",177:"icon.logo_enterprise_search-js",178:"icon.logo_etcd-js",179:"icon.logo_gcp-js",180:"icon.logo_gcp_mono-js",181:"icon.logo_github-js",182:"icon.logo_gmail-js",183:"icon.logo_ibm-js",184:"icon.logo_ibm_mono-js",185:"icon.logo_kafka-js",186:"icon.logo_kibana-js",187:"icon.logo_kubernetes-js",188:"icon.logo_logging-js",189:"icon.logo_logstash-js",190:"icon.logo_maps-js",191:"icon.logo_memcached-js",192:"icon.logo_metrics-js",193:"icon.logo_mongodb-js",194:"icon.logo_mysql-js",195:"icon.logo_nginx-js",196:"icon.logo_osquery-js",197:"icon.logo_php-js",198:"icon.logo_postgres-js",199:"icon.logo_prometheus-js",200:"icon.logo_rabbitmq-js",201:"icon.logo_redis-js",202:"icon.logo_security-js",203:"icon.logo_site_search-js",204:"icon.logo_sketch-js",205:"icon.logo_slack-js",206:"icon.logo_uptime-js",207:"icon.logo_webhook-js",208:"icon.logo_windows-js",209:"icon.logstash_filter-js",210:"icon.logstash_if-js",211:"icon.logstash_input-js",212:"icon.logstash_output-js",213:"icon.logstash_queue-js",214:"icon.magnet-js",215:"icon.magnifyWithMinus-js",216:"icon.magnifyWithPlus-js",217:"icon.map_marker-js",218:"icon.memory-js",219:"icon.menuLeft-js",220:"icon.menuRight-js",221:"icon.merge-js",222:"icon.minus_in_circle-js",223:"icon.minus_in_circle_filled-js",224:"icon.ml_create_advanced_job-js",225:"icon.ml_create_multi_metric_job-js",226:"icon.ml_create_population_job-js",227:"icon.ml_create_single_metric_job-js",228:"icon.ml_data_visualizer-js",229:"icon.moon-js",230:"icon.node-js",231:"icon.number-js",232:"icon.offline-js",233:"icon.online-js",234:"icon.paint-js",235:"icon.pause-js",236:"icon.pencil-js",237:"icon.pin-js",238:"icon.pin_filled-js",239:"icon.play-js",240:"icon.plus_in_circle-js",241:"icon.plus_in_circle_filled-js",242:"icon.popout-js",243:"icon.question_in_circle-js",244:"icon.refresh-js",245:"icon.save-js",246:"icon.scale-js",247:"icon.search-js",248:"icon.shard-js",249:"icon.share-js",250:"icon.snowflake-js",251:"icon.sortLeft-js",252:"icon.sortRight-js",253:"icon.sort_down-js",254:"icon.sort_up-js",255:"icon.sortable-js",256:"icon.starPlusEmpty-js",257:"icon.starPlusFilled-js",258:"icon.star_empty-js",259:"icon.star_empty_space-js",260:"icon.star_filled-js",261:"icon.star_filled_space-js",262:"icon.star_minus_empty-js",263:"icon.star_minus_filled-js",264:"icon.stats-js",265:"icon.stop-js",266:"icon.stop_filled-js",267:"icon.stop_slash-js",268:"icon.storage-js",269:"icon.string-js",270:"icon.submodule-js",271:"icon.swatch_input-js",272:"icon.symlink-js",273:"icon.tableOfContents-js",274:"icon.tag-js",275:"icon.tear-js",276:"icon.temperature-js",277:"icon.tokens-tokenAnnotation-js",278:"icon.tokens-tokenArray-js",279:"icon.tokens-tokenBoolean-js",280:"icon.tokens-tokenClass-js",281:"icon.tokens-tokenConstant-js",282:"icon.tokens-tokenElement-js",283:"icon.tokens-tokenEnum-js",284:"icon.tokens-tokenEnumMember-js",285:"icon.tokens-tokenEvent-js",286:"icon.tokens-tokenException-js",287:"icon.tokens-tokenField-js",288:"icon.tokens-tokenFile-js",289:"icon.tokens-tokenFunction-js",290:"icon.tokens-tokenInterface-js",291:"icon.tokens-tokenKey-js",292:"icon.tokens-tokenMethod-js",293:"icon.tokens-tokenModule-js",294:"icon.tokens-tokenNamespace-js",295:"icon.tokens-tokenNull-js",296:"icon.tokens-tokenNumber-js",297:"icon.tokens-tokenObject-js",298:"icon.tokens-tokenOperator-js",299:"icon.tokens-tokenPackage-js",300:"icon.tokens-tokenParameter-js",301:"icon.tokens-tokenProperty-js",302:"icon.tokens-tokenRepo-js",303:"icon.tokens-tokenString-js",304:"icon.tokens-tokenStruct-js",305:"icon.tokens-tokenSymbol-js",306:"icon.tokens-tokenVariable-js",307:"icon.training-js",308:"icon.trash-js",309:"icon.user-js",310:"icon.vector-js",311:"icon.videoPlayer-js",312:"icon.vis_area-js",313:"icon.vis_bar_horizontal-js",314:"icon.vis_bar_vertical-js",315:"icon.vis_controls-js",316:"icon.vis_gauge-js",317:"icon.vis_goal-js",318:"icon.vis_heatmap-js",319:"icon.vis_line-js",320:"icon.vis_map_coordinate-js",321:"icon.vis_map_region-js",322:"icon.vis_metric-js",323:"icon.vis_pie-js",324:"icon.vis_table-js",325:"icon.vis_tag_cloud-js",326:"icon.vis_text-js",327:"icon.vis_timelion-js",328:"icon.vis_vega-js",329:"icon.vis_visual_builder-js",330:"icon.wrench-js",343:"vendors~icon.logo_ceph-js",344:"vendors~icon.logo_golang-js",345:"vendors~icon.logo_haproxy-js"}[chunkId]||chunkId)+".bundle.js"}function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.e=function requireEnsure(chunkId){var promises=[];var installedChunkData=installedChunks[chunkId];if(installedChunkData!==0){if(installedChunkData){promises.push(installedChunkData[2])}else{var promise=new Promise(function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]});promises.push(installedChunkData[2]=promise);var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");var onScriptComplete;script.charset="utf-8";script.timeout=120;if(__webpack_require__.nc){script.setAttribute("nonce",__webpack_require__.nc)}script.src=jsonpScriptSrc(chunkId);onScriptComplete=function(event){script.onerror=script.onload=null;clearTimeout(timeout);var chunk=installedChunks[chunkId];if(chunk!==0){if(chunk){var errorType=event&&(event.type==="load"?"missing":event.type);var realSrc=event&&event.target&&event.target.src;var error=new Error("Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")");error.type=errorType;error.request=realSrc;chunk[1](error)}installedChunks[chunkId]=undefined}};var timeout=setTimeout(function(){onScriptComplete({type:"timeout",target:script})},12e4);script.onerror=script.onload=onScriptComplete;head.appendChild(script)}}return Promise.all(promises)};__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="__REPLACE_WITH_PUBLIC_PATH__";__webpack_require__.oe=function(err){console.error(err);throw err};var jsonpArray=window["webpackJsonp"]=window["webpackJsonp"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;deferredModules.push([2667,0]);return checkDeferredModules()}({2667:function(module,exports,__webpack_require__){"use strict";__webpack_require__(104);__webpack_require__(105);__webpack_require__(106);__webpack_require__(107);__webpack_require__(108);__webpack_require__(109);__webpack_require__(110);__webpack_require__(111);__webpack_require__(112);__webpack_require__(113);__webpack_require__(114);__webpack_require__(115);__webpack_require__(116);__webpack_require__(117);__webpack_require__(118);__webpack_require__(119);__webpack_require__(120);__webpack_require__(121);__webpack_require__(122);__webpack_require__(123);__webpack_require__(124);__webpack_require__(125);__webpack_require__(126);__webpack_require__(127);__webpack_require__(128);__webpack_require__(129);__webpack_require__(130);__webpack_require__(131);__webpack_require__(132);__webpack_require__(133);__webpack_require__(134);__webpack_require__(135);__webpack_require__(136);__webpack_require__(137);__webpack_require__(138);__webpack_require__(139);__webpack_require__(140);__webpack_require__(141);__webpack_require__(142);__webpack_require__(143);__webpack_require__(144);__webpack_require__(145);__webpack_require__(146);__webpack_require__(147);__webpack_require__(148);__webpack_require__(149);__webpack_require__(150);__webpack_require__(151);__webpack_require__(152);__webpack_require__(153);__webpack_require__(154);__webpack_require__(155);__webpack_require__(156);__webpack_require__(157);__webpack_require__(158);__webpack_require__(159);__webpack_require__(160);__webpack_require__(161);__webpack_require__(162);__webpack_require__(163);__webpack_require__(164);__webpack_require__(165);__webpack_require__(166);__webpack_require__(167);__webpack_require__(168);__webpack_require__(169);__webpack_require__(170);__webpack_require__(171);__webpack_require__(172);__webpack_require__(173);__webpack_require__(174);__webpack_require__(175);__webpack_require__(176);__webpack_require__(177);__webpack_require__(178);__webpack_require__(179);__webpack_require__(180);__webpack_require__(181);__webpack_require__(182);__webpack_require__(183);__webpack_require__(184);__webpack_require__(185);__webpack_require__(186);__webpack_require__(187);__webpack_require__(188);__webpack_require__(189);__webpack_require__(190);__webpack_require__(191);__webpack_require__(192);__webpack_require__(193);__webpack_require__(194);__webpack_require__(195);__webpack_require__(196);__webpack_require__(197);__webpack_require__(198);__webpack_require__(199);__webpack_require__(200);__webpack_require__(201);__webpack_require__(202);__webpack_require__(203);__webpack_require__(204);__webpack_require__(205);__webpack_require__(206);__webpack_require__(207);__webpack_require__(208);__webpack_require__(209);__webpack_require__(210);__webpack_require__(211);__webpack_require__(212);__webpack_require__(213);__webpack_require__(214);__webpack_require__(215);__webpack_require__(216);__webpack_require__(217);__webpack_require__(218);__webpack_require__(219);__webpack_require__(220);__webpack_require__(221);__webpack_require__(222);__webpack_require__(223);__webpack_require__(224);__webpack_require__(225);__webpack_require__(226);__webpack_require__(227);__webpack_require__(228);__webpack_require__(229);__webpack_require__(230);__webpack_require__(231);__webpack_require__(232);__webpack_require__(233);__webpack_require__(234);var _i18n=__webpack_require__(5);var _kibanaCore__=__webpack_require__(83);__webpack_require__.nc=window.__kbnNonce__;var injectedMetadata=JSON.parse(document.querySelector("kbn-injected-metadata").getAttribute("data"));_i18n.i18n.load(injectedMetadata.i18n.translationsUrl).catch(function(e){return e}).then(function(i18nError){var coreSystem=new _kibanaCore__.CoreSystem({injectedMetadata:injectedMetadata,rootDomElement:document.body,browserSupportsCsp:!window.__kbnCspNotEnforced__,requireLegacyFiles:function requireLegacyFiles(){__webpack_require__(2668)}});coreSystem.setup().then(function(coreSetup){if(i18nError){coreSetup.fatalErrors.add(i18nError)}return coreSystem.start()})})},2668:function(module,exports,__webpack_require__){"use strict";var _chrome=_interopRequireDefault(__webpack_require__(11));__webpack_require__(63);__webpack_require__(2669);var _page_controller=_interopRequireDefault(__webpack_require__(2670));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}_chrome.default.setVisible(false).setRootTemplate(__webpack_require__(2672)).setRootController("ui",_page_controller.default)},2669:function(module,exports,__webpack_require__){},2670:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=PageController;var _chrome=_interopRequireDefault(__webpack_require__(11));var _errormessage_types=__webpack_require__(2671);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function PageController(){var ROOT=_chrome.default.getBasePath();var BRANDIMAGE=_chrome.default.getInjected("basicauth.login.brandimage");this.buttonHref=ROOT+"/app/kibana";this.buttonstyle=_chrome.default.getInjected("basicauth.login.buttonstyle");localStorage.clear();sessionStorage.clear();var type=null;var queryString=location.search.trim().replace(/^(\?)/,"");if(queryString){queryString.split("&").map(function(parameter){var parameterParts=parameter.split("=");if(parameterParts[0].toLowerCase()==="type"){type=parameterParts[1]}})}if(!type||!_errormessage_types.messageTypes[type]){this.title=_errormessage_types.messageTypes["default"].title;this.subtitle=_errormessage_types.messageTypes["default"].subtitle}else{this.title=_errormessage_types.messageTypes[type].title;this.subtitle=_errormessage_types.messageTypes[type].subtitle}this.showbrandimage=_chrome.default.getInjected("basicauth.login.showbrandimage");this.brandimage=_chrome.default.getInjected("basicauth.login.brandimage");if(BRANDIMAGE.startsWith("/plugins")){this.brandimage=ROOT+BRANDIMAGE}else{this.brandimage=BRANDIMAGE}}module.exports=exports.default},2671:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.messageTypes=void 0;var messageTypes={default:{title:"Logged out",subtitle:"Please login with a new token."},missingTenant:{title:"Missing Tenant",subtitle:"No tenant available for this user, please contact your system administrator."},missingRole:{title:"Missing Role",subtitle:"No roles available for this user, please contact your system administrator."},sessionExpired:{title:"Session Expired",subtitle:"Please provide a new token."},authError:{title:"Authentication failed",subtitle:"Please provide a new token."},samlConfigError:{title:"SAML configuration error",subtitle:"Something went wrong while retrieving the SAML configuration, please check your settings."},samlAuthError:{title:"SAML authentication error",subtitle:"The SAML authentication failed. Please contact your administrator."},samlLogoutSuccess:{title:"You have been logged out.",subtitle:""},anonymousAuthError:{title:"Anonymous authentication error",subtitle:"Please make sure that anonymous auth is enabled in Security."},proxycacheAuthError:{title:"Authentication failed",subtitle:"Please login again"},proxycacheLogout:{title:"You have been logged out.",subtitle:""}};exports.messageTypes=messageTypes},2672:function(module,exports){module.exports='<div class="container security-custom-wrapper" style=\'{{ui.showbrandimage? "" : "top:30%"}}\'>\n\n  <div class="text-center security-brand-image-container" ng-show="ui.showbrandimage">\n    <img class="security-brand-image" src="{{ui.brandimage}}" width="300">\n  </div>\n\n  <p class="security-custom-title" ng-show="ui.title != \'\'">{{ui.title}}</p>\n  <p class="security-custom-subtitle" ng-show="ui.subtitle != \'\'">{{ui.subtitle}}</p>\n\n  <div class="text-center">\n    <a ng-attr-href="{{ui.buttonHref}}" id="opendistro_security.custom.home" class="btn btn-default security-custom-btn-home" ng-attr-style="{{ui.buttonstyle}}">\n      Back to Kibana Home\n    </a>\n  </div>\n\n</div>\n'},6:function(module,exports){module.exports=vendors}})["plugin"];