"use strict";(self.webpackChunksb_react=self.webpackChunksb_react||[]).push([[6012],{"../../packages/app/src/stories/video/LmVideo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AspectRatio:()=>AspectRatio,Basic:()=>Basic,Height200:()=>Height200,Height200Contain:()=>Height200Contain,Width200:()=>Width200,default:()=>LmVideo_stories});var defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../node_modules/react/index.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),build=__webpack_require__("../../node_modules/expo-av/build/index.js"),_excluded=["aspectRatio","src","width","height","useNativeControls","resizeMode","style"],__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var LmVideo=(0,react.forwardRef)((function LmVideoFunc(_ref,ref){var _ref$aspectRatio=_ref.aspectRatio,aspectRatio=void 0===_ref$aspectRatio?16/9:_ref$aspectRatio,src=_ref.src,width=_ref.width,height=_ref.height,_ref$useNativeControl=_ref.useNativeControls,useNativeControls=void 0===_ref$useNativeControl||_ref$useNativeControl,_ref$resizeMode=_ref.resizeMode,resizeMode=void 0===_ref$resizeMode?build.ResizeMode.COVER:_ref$resizeMode,style=_ref.style,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(build.Video,(0,esm_extends.Z)({},rest,{source:{uri:src},ref,style:_objectSpread({width:width||"100%",height,aspectRatio},style),videoStyle:_objectSpread({width:"100%",height},rest.videoStyle),resizeMode,useNativeControls}))}));LmVideo.__docgenInfo={description:"",methods:[],displayName:"LmVideo",props:{aspectRatio:{defaultValue:{value:"16 / 9",computed:!1},required:!1},useNativeControls:{defaultValue:{value:"true",computed:!1},required:!1},resizeMode:{defaultValue:{value:"ResizeMode.COVER",computed:!0},required:!1}}};try{LmVideo.displayName="LmVideo",LmVideo.__docgenInfo={description:"",displayName:"LmVideo",props:{status:{defaultValue:null,description:"A dictionary setting a new `AVPlaybackStatusToSet` on the video.\nSee the [AV documentation](./av#default-initial--avplaybackstatustoset) for more information on `AVPlaybackStatusToSet`.",name:"status",required:!1,type:{name:"AVPlaybackStatusToSet"}},accessibilityRole:{defaultValue:null,description:"",name:"accessibilityRole",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},hrefAttrs:{defaultValue:null,description:"",name:"hrefAttrs",required:!1,type:{name:'{ rel: "noreferrer"; target?: "_blank"; }'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void)"}},rotation:{defaultValue:null,description:"@hidden",name:"rotation",required:!1,type:{name:"number"}},scaleX:{defaultValue:null,description:"@hidden",name:"scaleX",required:!1,type:{name:"number"}},scaleY:{defaultValue:null,description:"@hidden",name:"scaleY",required:!1,type:{name:"number"}},translateX:{defaultValue:null,description:"@hidden",name:"translateX",required:!1,type:{name:"number"}},translateY:{defaultValue:null,description:"@hidden",name:"translateY",required:!1,type:{name:"number"}},posterSource:{defaultValue:null,description:"The source of an optional image to display over the video while it is loading. The following forms are supported:\n- A dictionary of the form `{ uri: 'http://path/to/file' }` with a network URL pointing to an image file on the web.\n- `require('path/to/file')` for an image file asset in the source code directory.",name:"posterSource",required:!1,type:{name:"ImageSourcePropType"}},posterStyle:{defaultValue:null,description:"An optional property to pass custom styles to the poster image.",name:"posterStyle",required:!1,type:{name:"StyleProp<ImageStyle>"}},videoStyle:{defaultValue:null,description:"An optional property to pass custom styles to the internal video component.",name:"videoStyle",required:!1,type:{name:"StyleProp<ViewStyle>"}},onPlaybackStatusUpdate:{defaultValue:null,description:"A function to be called regularly with the `AVPlaybackStatus` of the video. You will likely be using this a lot.\nSee the [AV documentation](av.md) for further information on `onPlaybackStatusUpdate`, and the interval at which it is called.\n@param status",name:"onPlaybackStatusUpdate",required:!1,type:{name:"((status: AVPlaybackStatus) => void)"}},onLoadStart:{defaultValue:null,description:"A function to be called when the video begins to be loaded into memory. Called without any arguments.",name:"onLoadStart",required:!1,type:{name:"(() => void)"}},onLoad:{defaultValue:null,description:"A function to be called once the video has been loaded. The data is streamed so all of it may not have been fetched yet, just enough to render the first frame.\nThe function is called with the `AVPlaybackStatus` of the video as its parameter. See the [AV documentation](./av) for further information.\n@param status",name:"onLoad",required:!1,type:{name:"((status: AVPlaybackStatus) => void)"}},onError:{defaultValue:null,description:"A function to be called if load or playback have encountered a fatal error. The function is passed a single error message string as a parameter.\nErrors sent here are also set on `playbackStatus.error` that are passed into the `onPlaybackStatusUpdate` callback.\n@param error",name:"onError",required:!1,type:{name:"((error: string) => void)"}},onReadyForDisplay:{defaultValue:null,description:"A function to be called when the video is ready for display. Note that this function gets called whenever the video's natural size changes.\n@param event",name:"onReadyForDisplay",required:!1,type:{name:"((event: VideoReadyForDisplayEvent) => void)"}},onFullscreenUpdate:{defaultValue:null,description:"A function to be called when the state of the native iOS fullscreen view changes (controlled via the `presentFullscreenPlayer()`\nand `dismissFullscreenPlayer()` methods on the `Video`'s `ref`).\n@param event",name:"onFullscreenUpdate",required:!1,type:{name:"((event: VideoFullscreenUpdateEvent) => void)"}},useNativeControls:{defaultValue:{value:"true"},description:"A boolean which, if set to `true`, will display native playback controls (such as play and pause) within the `Video` component.\nIf you'd prefer to use custom controls, you can write them yourself, and/or check out the [`VideoPlayer` component](https://github.com/ihmpavel/expo-video-player).",name:"useNativeControls",required:!1,type:{name:"boolean"}},resizeMode:{defaultValue:{value:"ResizeMode.COVER"},description:"A string describing how the video should be scaled for display in the component view bounds.\nMust be one of the [`ResizeMode`](#resizemode) enum values.",name:"resizeMode",required:!1,type:{name:"enum",value:[{value:'"contain"'},{value:'"cover"'},{value:'"stretch"'}]}},usePoster:{defaultValue:null,description:"A boolean which, if set to `true`, will display an image (whose source is set via the prop `posterSource`) while the video is loading.",name:"usePoster",required:!1,type:{name:"boolean"}},PosterComponent:{defaultValue:null,description:"A react-native `Image` like component to display the poster image.",name:"PosterComponent",required:!1,type:{name:"ComponentType<{ style: StyleProp<ImageStyle>; source: ImageSourcePropType; }>"}},progressUpdateIntervalMillis:{defaultValue:null,description:"A number describing the new minimum interval in milliseconds between calls of `onPlaybackStatusUpdate`.\nSee the [AV documentation](./av) for more information.",name:"progressUpdateIntervalMillis",required:!1,type:{name:"number"}},positionMillis:{defaultValue:null,description:"The desired position of playback in milliseconds.\nSee the [AV documentation](./av) for more information.",name:"positionMillis",required:!1,type:{name:"number"}},shouldPlay:{defaultValue:null,description:"A boolean describing if the media is supposed to play. Playback may not start immediately after setting this value for reasons such as buffering.\nMake sure to update your UI based on the `isPlaying` and `isBuffering` properties of the `AVPlaybackStatus`.\nSee the [AV documentation](./av) for more information.",name:"shouldPlay",required:!1,type:{name:"boolean"}},rate:{defaultValue:null,description:"The desired playback rate of the media. This value must be between `0.0` and `32.0`. Only available on Android API version 23 and later and iOS.\nSee the [AV documentation](./av) for more information.",name:"rate",required:!1,type:{name:"number"}},shouldCorrectPitch:{defaultValue:null,description:"A boolean describing if we should correct the pitch for a changed rate. If set to `true`, the pitch of the audio will be corrected\n(so a rate different than `1.0` will timestretch the audio).\nSee the [AV documentation](./av) for more information.",name:"shouldCorrectPitch",required:!1,type:{name:"boolean"}},volume:{defaultValue:null,description:"The desired volume of the audio for this media. This value must be between `0.0` (silence) and `1.0` (maximum volume).\nSee the [AV documentation](./av) for more information.",name:"volume",required:!1,type:{name:"number"}},isMuted:{defaultValue:null,description:"A boolean describing if the audio of this media should be muted.\nSee the [AV documentation](./av) for more information.",name:"isMuted",required:!1,type:{name:"boolean"}},audioPan:{defaultValue:null,description:"The desired audio panning value of the audio for this media. This value must be between `-1.0` (full left) and `1.0` (full right).\nSee the [AV documentation](./av) for more information.",name:"audioPan",required:!1,type:{name:"number"}},isLooping:{defaultValue:null,description:"A boolean describing if the media should play once (`false`) or loop indefinitely (`true`).\nSee the [AV documentation](./av) for more information.",name:"isLooping",required:!1,type:{name:"boolean"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:'Omit<StyleProp<View>, "height" | "width">'}},aspectRatio:{defaultValue:{value:"16 / 9"},description:"",name:"aspectRatio",required:!1,type:{name:"number"}},containerProps:{defaultValue:null,description:"",name:"containerProps",required:!1,type:{name:'(Omit<ViewProps, "children" | "display" | "onLayout" | keyof GestureResponderHandlers> & ExtendBaseStackProps & ... 7 more ... & PseudoProps<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/video/src/LmVideo.tsx#LmVideo"]={docgenInfo:LmVideo.__docgenInfo,name:"LmVideo",path:"../../packages/video/src/LmVideo.tsx#LmVideo"})}catch(__react_docgen_typescript_loader_error){}var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_Width200$parameters,_Width200$parameters2,_Width200$parameters3,_Height200$parameters,_Height200$parameters2,_Height200$parameters3,_Height200Contain$par,_Height200Contain$par2,_Height200Contain$par3,_AspectRatio$paramete,_AspectRatio$paramete2,_AspectRatio$paramete3,Stacks=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/Stacks.js"),esm=__webpack_require__("../../node_modules/tamagui/dist/esm/index.js"),LmVideo_stories_jsx=react.createElement;function LmVideo_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function LmVideo_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?LmVideo_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):LmVideo_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const LmVideo_stories={title:"video/Video",component:LmVideo};var uri="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",Basic={args:{src:uri}},Width200={args:{src:uri,width:200}},Height200={args:{src:uri,height:200}},Height200Contain={args:{src:uri,height:200,resizeMode:build.ResizeMode.CONTAIN}},AspectRatio={args:LmVideo_stories_objectSpread({},Basic.args),render:function render(args){return LmVideo_stories_jsx(Stacks.FA,{width:300,backgroundColor:"$green5",height:600},LmVideo_stories_jsx(esm.H3,{paddingBottom:"$4"},"Parent Container: 300x600"),LmVideo_stories_jsx(LmVideo,{src:args.src,aspectRatio:4/3}),LmVideo_stories_jsx(esm.Paragraph,null,"waiting for new expo-av release..."))}};Basic.parameters=LmVideo_stories_objectSpread(LmVideo_stories_objectSpread({},Basic.parameters),{},{docs:LmVideo_stories_objectSpread(LmVideo_stories_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:LmVideo_stories_objectSpread({originalSource:"{\n  args: {\n    src: uri\n  }\n}"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source)})}),Width200.parameters=LmVideo_stories_objectSpread(LmVideo_stories_objectSpread({},Width200.parameters),{},{docs:LmVideo_stories_objectSpread(LmVideo_stories_objectSpread({},null===(_Width200$parameters=Width200.parameters)||void 0===_Width200$parameters?void 0:_Width200$parameters.docs),{},{source:LmVideo_stories_objectSpread({originalSource:"{\n  args: {\n    src: uri,\n    width: 200\n  }\n}"},null===(_Width200$parameters2=Width200.parameters)||void 0===_Width200$parameters2||null===(_Width200$parameters3=_Width200$parameters2.docs)||void 0===_Width200$parameters3?void 0:_Width200$parameters3.source)})}),Height200.parameters=LmVideo_stories_objectSpread(LmVideo_stories_objectSpread({},Height200.parameters),{},{docs:LmVideo_stories_objectSpread(LmVideo_stories_objectSpread({},null===(_Height200$parameters=Height200.parameters)||void 0===_Height200$parameters?void 0:_Height200$parameters.docs),{},{source:LmVideo_stories_objectSpread({originalSource:"{\n  args: {\n    src: uri,\n    height: 200\n  }\n}"},null===(_Height200$parameters2=Height200.parameters)||void 0===_Height200$parameters2||null===(_Height200$parameters3=_Height200$parameters2.docs)||void 0===_Height200$parameters3?void 0:_Height200$parameters3.source)})}),Height200Contain.parameters=LmVideo_stories_objectSpread(LmVideo_stories_objectSpread({},Height200Contain.parameters),{},{docs:LmVideo_stories_objectSpread(LmVideo_stories_objectSpread({},null===(_Height200Contain$par=Height200Contain.parameters)||void 0===_Height200Contain$par?void 0:_Height200Contain$par.docs),{},{source:LmVideo_stories_objectSpread({originalSource:"{\n  args: {\n    src: uri,\n    height: 200,\n    resizeMode: ResizeMode.CONTAIN\n  }\n}"},null===(_Height200Contain$par2=Height200Contain.parameters)||void 0===_Height200Contain$par2||null===(_Height200Contain$par3=_Height200Contain$par2.docs)||void 0===_Height200Contain$par3?void 0:_Height200Contain$par3.source)})}),AspectRatio.parameters=LmVideo_stories_objectSpread(LmVideo_stories_objectSpread({},AspectRatio.parameters),{},{docs:LmVideo_stories_objectSpread(LmVideo_stories_objectSpread({},null===(_AspectRatio$paramete=AspectRatio.parameters)||void 0===_AspectRatio$paramete?void 0:_AspectRatio$paramete.docs),{},{source:LmVideo_stories_objectSpread({originalSource:"{\n  args: {\n    ...Basic.args\n  },\n  render: args => <YStack width={300} backgroundColor={'$green5'} height={600}>\n      <H3 paddingBottom={'$4'}>Parent Container: 300x600</H3>\n      <LmVideo src={args.src} aspectRatio={4 / 3} />\n      <Paragraph>waiting for new expo-av release...</Paragraph>\n    </YStack>\n}"},null===(_AspectRatio$paramete2=AspectRatio.parameters)||void 0===_AspectRatio$paramete2||null===(_AspectRatio$paramete3=_AspectRatio$paramete2.docs)||void 0===_AspectRatio$paramete3?void 0:_AspectRatio$paramete3.source)})})}}]);