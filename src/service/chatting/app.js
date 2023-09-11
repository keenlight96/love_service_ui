import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

let stompClient = null;
connect();

// export function connect(roomId) {
//     let socket = new WebSocket('ws://localhost:8080/gkz-stomp-endpoint/websocket');
//     stompClient = Stomp.over(socket);
//     stompClient.connect({}, function (frame) {
//         // console.log("ok")
//         console.log('Connected: ' + frame);
//         stompClient.subscribe(roomId, function (message) {
//             // console.log("anh ok")
//             // console.log(message)
//             showMessage(JSON.parse(message.body).greeting);
//
//         });
//     });
// }

export function connect() {
    let socket = new WebSocket('ws://localhost:8080/gkz-stomp-endpoint/websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        // console.log("ok")
        console.log('Connected: ' + frame);
        stompClient.subscribe("testRoom", function (message) {
            // console.log("anh ok")
            // console.log(message)
            showMessage(JSON.parse(message.body).greeting);

        });
    });
}

export function forceDisconnect() {
    stompClient.disconnect();
}

export function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

// function sendMessage() {
//     console.log("send ok")
//     stompClient.send("/gkz/hello", {}, JSON.stringify({
//         "sender" : $("#senderId").val(),
//         'message': $("#textMessage").val()
//     }));
// }

// export function sendMessage() {
//     let sender = JSON.parse(localStorage.getItem("user"));
//     let message = {
//         "sender": {
//             id: sender.id,
//             username: sender.username,
//             avatar: sender.avatar
//         },
//         "receiver": {
//             id: document.querySelector("#receiverId").val()
//         },
//         'message': document.querySelector("#textMessage").val()
//     }
//     stompClient.send("/gkz/hello", {}, JSON.stringify(message));
// }

export function sendMessage(receiverId) {
    let sender = JSON.parse(localStorage.getItem("user"));
    let message = {
        "sender": {
            id: sender.id,
            username: sender.username,
            avatar: sender.avatar
        },
        "receiver": {
            id: receiverId
        },
        'message': document.querySelector("#textMessage").val()
    }
    stompClient.send("/gkz/hello", {}, JSON.stringify(message));
}


// export function showMessage(message) {
//     // document.querySelector("#textAreaMessage").innerHTML += `<p>${message}</p>`;
//     let user = JSON.parse(localStorage.getItem("user"));
//     let str = "";
//     if (user.id == message.sender.id) {
//         str = `
//             <div className="msg-wrap">
//                 <div className="msg-body msg-fill radius">
//                     <div className="msg-detail" style={{position: 'relative'}}>
//                         <div>
//                             <div className="msg null"><p>{message.message}</p></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
//     } else {
//         str = `
//             <div className="msg-wrap">
//                 <div className="msg-body  radius">
//                     <div className="msg-detail" style={{position: 'relative'}}>
//                         <div>
//                             <div className="msg null"><p>{message.message}</p></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
//
//     document.querySelector("#textMessage").val("");
//
//     document.querySelector("#chat-content").innerHTML += str;
//     // scrollToBottom();
//
// }

export function showMessage(message) {
    // document.querySelector("#textAreaMessage").innerHTML += `<p>${message}</p>`;
    let user = JSON.parse(localStorage.getItem("user"));
    let str = "";
    str = `
        <div className="msg-wrap">
            <div className="msg-body msg-fill radius">
                <div className="msg-detail" style={{position: 'relative'}}>
                    <div>
                        <div className="msg null"><p>{message.message}</p></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.querySelector("#textMessage").val("");

    document.querySelector("#chat-content").innerHTML += str;
    // scrollToBottom();

}

// $(function () {
//     connect();
//     $("#send").click(function () {
//         sendMessage()
//     });
// });