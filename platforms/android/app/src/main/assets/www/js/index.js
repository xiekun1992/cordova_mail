/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.getData();
        // navigator.splashscreen.hide();

        // function click() {
        //     console.log('yes')
        // }
        // function clear() {
        //     console.log('no')
        // }
        // try{

            let counter = 0;
            // setInterval(function() {
                cordova.plugins.notification.local.schedule([{
                    id: counter++,
                    title: `test ${Math.random()}`,
                    text: `this is a test notification ${Math.random()}`,
                    foreground: true,
                    actions: 'yes-no'
                },{
                    id: counter++,
                    title: `test ${Math.random()}`,
                    text: `this is a test notification ${Math.random()}`,
                    // foreground: true,
                    progressBar: {value: 20}
                    // actions: 'yes-no'
                }]);
                window.navigator.vibrate([100, 100, 100]);
                // cordova.plugins.notification.local.schedule();

                // cordova.plugins.notification.local.un('click', click);
                // cordova.plugins.notification.local.un('clear', clear);

                // cordova.plugins.notification.local.on('click', click);
                // cordova.plugins.notification.local.on('clear', clear);
            // }, 5000);
        // } catch(e) {
        //     alert(e.message);
        // }

        window.xstatusBar = {
            style: StatusBar.styleLightContent,
            setStyle: function(fnName) {
                this.style = fnName;
                this.style();
            }
        }

        StatusBar.backgroundColorByHexString('#00000000');
        setInterval(function() {
            StatusBar.show();
            xstatusBar.style();
        }, 0);

        // StatusBar.overlaysWebView(true);
        // var t = setTimeout(function() {
        //     navigator.splashscreen.hide();
        //     clearTimeout(t);
        // }, 2000);

        // this.receivedEvent('deviceready');
    },
    getData: function() {
        var response = {"message": "success", "data": {"pc_feed_focus": [{"title": "\u6700\u5f3a\u201c\u8001\u53f8\u673a\u201d\u4e0a\u7ebf\uff01\u666e\u4eac\u5f00\u8f66\u5e26\u57c3\u603b\u7edf\u515c\u98ceF1\u8d5b\u8f66\u573a", "display_url": "/group/6613573463565140483/", "has_video": false, "image_url": "//p1.pstatp.com/origin/da5500069997e890592c", "has_image": true, "group_id": 6613573463565140483, "media_url": "http://toutiao.com/m5784742177"}, {"title": "\u72c2\u8650\u8eab\u8fb9\u5355\u8eab\u72d7\u6570\u5341\u5e74\uff0c\u5982\u4eca\u53ea\u613f\u80fd\u6d3b\u7740", "display_url": "/group/6613332183333470734/", "has_video": false, "image_url": "//p3.pstatp.com/origin/da5f000500cd87d20ee0", "has_image": true, "group_id": 6613332183333470734, "media_url": "http://toutiao.com/m1553382042739714"}, {"title": "\u5764\u97f3\u56db\u5b50ONER\u4e13\u8bbf\uff0c\u535c\u51e1\u9ad8\u5927\u5e05\u6c14\u8d85\u7ea7man", "display_url": "/group/6613547842306834958/", "has_video": false, "image_url": "//p3.pstatp.com/origin/da600001054b8b6c7c13", "has_image": true, "group_id": 6613547842306834958, "media_url": "http://toutiao.com/m5738017030"}, {"title": "\u5b69\u5b50\u738b\uff01\u59c6\u5df4\u4f69\u56de\u4e61\u5f15\u53d1\u4e07\u4eba\u7a7a\u5df7 \u88ab\u5c0f\u8ff7\u59b9\u56e2\u56e2\u56f4\u4f4f", "display_url": "/group/6613536848394322446/", "has_video": false, "image_url": "//p3.pstatp.com/origin/d27d00065416710f968c", "has_image": true, "group_id": 6613536848394322446, "media_url": "http://toutiao.com/m6675759548"}, {"title": "\u7f8e\u519b\u81ea\u5df1\u627f\u8ba4\u4e3b\u6218\u5766\u514b\u5df2\u843d\u540e\u4e9a\u6d32\u56fd\u5bb6\uff1a\u6253\u4e0d\u8fc7\u4e86", "display_url": "/group/6613332851536429571/", "has_video": false, "image_url": "//p3.pstatp.com/origin/da5e0002f97a915bc4ee", "has_image": false, "group_id": 6613332851536429571, "media_url": "http://toutiao.com/m4087561186"}, {"title": "\u5f20\u4e1c\u5065\u771f\u662f\u4e0d\u8001\u7537\u795e\uff0c\u4e0e\u7384\u5f6c\u5bf9\u89c6\u6709\u7231\u5341\u8db3", "display_url": "/group/6613548527156986372/", "has_video": false, "image_url": "//p98.pstatp.com/origin/d27e0009cd981e550d16", "has_image": true, "group_id": 6613548527156986372, "media_url": "http://toutiao.com/m5738017030"}, {"title": "\u6700\u540e\u4e00\u6839\u94a2\u6881\u5230\u4f4d\uff0c\u4eac\u5f20\u9ad8\u94c1\u6e05\u6cb3\u7ad9\u6b63\u5f0f\u5c01\u9876\uff01", "display_url": "/group/6613166402243133955/", "has_video": false, "image_url": "//p99.pstatp.com/origin/da5f00049c7456acb7b3", "has_image": true, "group_id": 6613166402243133955, "media_url": "http://toutiao.com/m5739097906"}, {"title": "4\u5c81\u91cd\u75c7\u5973\u5b69\u544a\u8bc9\u5988\u5988\uff1a\u5982\u679c\u6211\u6b7b\u4e86\uff0c\u4f1a\u53d8\u6210\u5929\u4f7f\u5b88\u62a4\u4f60\u4eec", "display_url": "/group/6612874360359223811/", "has_video": false, "image_url": "//p3.pstatp.com/origin/da5f00049792d7b79f6d", "has_image": true, "group_id": 6612874360359223811, "media_url": "http://toutiao.com/m1603895467141127"}, {"title": "\u534e\u8c0a\u5144\u5f1f\u738b\u4e2d\u78ca\u7684\u7ec5\u58eb\u4e00\u9762\uff0c\u529b\u7834\u5077\u7a0e\u4f20\u95fb", "display_url": "/group/6613151124247544333/", "has_video": false, "image_url": "//p99.pstatp.com/origin/da5200064f6d3bbd6185", "has_image": true, "group_id": 6613151124247544333, "media_url": "http://toutiao.com/m5738017030"}, {"title": "5\u5206\u949f\u5185\u906d\u5224\u7f5a\u4e24\u70b9\u7403\uff01\u53d9\u5229\u4e9a\u961f\u5458\u5bf9\u88c1\u5224\u5f3a\u70c8\u4e0d\u6ee1", "display_url": "/group/6612952064685244931/", "has_video": false, "image_url": "//p9.pstatp.com/origin/da560004b9adc57b0d1a", "has_image": true, "group_id": 6612952064685244931, "media_url": "http://toutiao.com/m6675759548"}]}};
        var data = response.data.pc_feed_focus;
        var html = '';
        try {

            data.forEach(function(d, i) {
                html += `<section>
                    <div>
                      <h1>${d.title}</h1>
                      <p><img src="${d.image_url}" width="100%" height="50px"></p>
                      <footer>${d.group_id}</footer>
                    </div>
                  </section>`
            });
        } catch (e) {
            console.log(e)
        }
        // alert(html);
        main.innerHTML = html;
        // main.style.height = `${window.screen.availHeight - 88 - 25}px`;

        // window.xstatusBar.setStyle(window.StatusBar.styleLightContent);

        // try {
        //     var xhr = new XMLHttpRequest();
        //     xhr.open('GET', 'https://www.toutiao.com/api/pc/focus/', true);
        //     xhr.onreadystatechange = function() {
        //         alert(1);
        //         if (xhr.status == 200 && xhr.readyState == 4) {
        //             alert(2)
        //             var data = JSON.parse(xhr.responseText).data.pc_feed_focus;
        //             var main = document.querySelector('#main');
        //             var html = '';
        //             data.forEach(function() {
        //                 html += `<section>
        //                     <div>
        //                       <h1>${d.title}</h1>
        //                       <p><img src="http:${d.image_url}" width="100%" height="50px"></p>
        //                       <footer>${d.group_id}</footer>
        //                     </div>
        //                   </section>`
        //             });
        //             alert(html);
        //             main.innerHTML = html;
        //             // main.style.height = `${window.screen.availHeight - 88 - 25}px`;

        //             window.xstatusBar.setStyle(window.StatusBar.styleLightContent);
        //         }
        //     }
        //     xhr.send();
        // } catch(e) {
        //     alert(e)
        // }
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();