(this.webpackJsonpjammming=this.webpackJsonpjammming||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),i=(a(14),a(2)),o=a(3),l=a(1),u=a(4),h=a(5),m=(a(15),a(8)),p="",d={getAccessToken:function(){if(p)return p;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){p=e[1];var a=Number(t[1]);return window.setTimeout((function(){return p=""}),1e3*a),window.history.pushState("Access Token",null,"/"),p}window.location="https://accounts.spotify.com/authorize?client_id=".concat("79f46761ced2400ba30fcb144e38807a","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://jammming.surge.sh")},search:function(e){return p=d.getAccessToken(),fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(p)}}).then((function(e){return e.json()})).then((function(e){return e.tracks?e.tracks.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}})):[]}))},savePlaylist:function(e,t){if(e&&t.length){var a=d.getAccessToken(),n={Authorization:"Bearer ".concat(a)},r="";return fetch("https://api.spotify.com/v1/me",{headers:n}).then((function(e){return e.json()})).then((function(a){return Object(m.a)("userId"),r=a.id,fetch("https://api.spotify.com/v1/users/".concat(r,"/playlists"),{headers:n,method:"POST",body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){return fetch("https://api.spotify.com/v1/users/playlists/".concat(e,"/tracks"),{headers:n,method:"POST",body:JSON.stringify({uris:t})})}))}))}}},v=d,f=(a(16),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={term:""},n.search=n.search.bind(Object(l.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"search",value:function(e){this.props.onSearch(e)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("input",{placeholder:"Enter A Song, Album, or Artist",onChange:this.handleTermChange}),r.a.createElement("button",{className:"SearchButton",onClick:this.search},"SEARCH"))}}]),a}(r.a.Component)),k=(a(17),a(18),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).addTrack=n.addTrack.bind(Object(l.a)(n)),n.removeTrack=n.removeTrack.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Track"},r.a.createElement("div",{className:"Track-information"},r.a.createElement("h3",null,this.props.track.name),r.a.createElement("p",null,this.props.track.artist," | ",this.props.track.album)),r.a.createElement("button",{className:"Track-action"},this.renderAction))}},{key:"renderAction",value:function(){return this.props.isRemoval?r.a.createElement("button",{className:"Track-action",onClick:this.removeTrack},"-"):r.a.createElement("button",{className:"Track-action",onClick:this.addTrack},"+")}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}}]),a}(r.a.Component)),y=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"TrackList"},this.props.tracks.map((function(t){return r.a.createElement(k,{track:t,key:t.id,onAdd:e.props.onAdd,onRemove:e.props.onRemove,isRemoval:e.props.isRemoval})})))}}]),a}(r.a.Component),b=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"SearchResults"},r.a.createElement("h2",null,"Results"),r.a.createElement(y,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1}))}}]),a}(r.a.Component),T=(a(19),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Playlist"},r.a.createElement("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),r.a.createElement(y,{tracks:this.props.tracks,onRemove:this.props.onRemove,isRemoval:!0}),r.a.createElement("button",{class:"Playlist-save",onClick:this.props.onSave},"SAVE TO SPOTIFY"))}}]),a}(r.a.Component)),j=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={playlistName:"",playlistTracks:[],searchResults:[]},n.addTrack=n.addTrack.bind(Object(l.a)(n)),n.removeTrack=n.removeTrack.bind(Object(l.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(l.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(l.a)(n)),n.search=n.search.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"addTrack",value:function(e){if(!this.state.playlistTracks.find((function(t){return t.id===e.id})))return this.state.playlistTracks.push(e)}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks.filter((function(t){return t.id!==e.id}));this.setState({playlistTracks:t})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){v.savePlaylist(),this.setState({playlistName:"New Playlist",playlistTracks:[]})}},{key:"search",value:function(e){var t=this;v.search(e).then((function(e){t.setState({searchResults:e})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Ja",r.a.createElement("span",{className:"highlight"},"mmm"),"ing"),r.a.createElement("div",{className:"App"},r.a.createElement(f,{onSearch:this.search}),r.a.createElement("div",{className:"App-playlist"},r.a.createElement(b,{searchResults:this.state.searchResults,onAdd:this.addTrack}),r.a.createElement(T,{name:this.state.playlistName,tracks:this.state.playlistTracks,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist,onRemove:this.removeTrack}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.6b7bc832.chunk.js.map