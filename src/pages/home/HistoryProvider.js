import {useEffect, useState} from "react";
import axios from "axios";


const HistoryProvider = () => {
    const [provider, setProvider] = useState([]);
    useEffect(() => {
        getAccountProvider()
    }, []);
    const account = JSON.parse(localStorage.getItem("account"));
    console.log(account.id)
    const getAccountProvider = () => {
        axios.get("http://localhost:8080/bills/" +account.id).then(res => {
            // Truy cập danh sách tài khoản đã thuê từ res.data
            const rentedAccounts = res.data;

            // Sắp xếp danh sách theo dateEnd (tăng dần)
            rentedAccounts.sort((a, b) => new Date(a.dateEnd) - new Date(b.dateEnd));

            // Lấy 3 tài khoản có dateEnd gần nhất
            const nearestAccounts = rentedAccounts.slice(0, 3);

            // Lặp qua danh sách tài khoản gần nhất và truy cập thông tin của từng tài khoản
            nearestAccounts.forEach(account => {
                console.log("Account Information:", account);
            });
        }).catch(err =>{
            console.log(err);
        })
    }
    return (
        <>
            <title>Game Community</title>
            <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
            <link rel="manifest" href="/manifest.json"/>

            <link rel="shortcut icon" href="/favicon.ico"/>
            <link href="../resources/all.css" rel="stylesheet"/>
            <link
                href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i&subset=vietnamese"
                rel="stylesheet"/>
            <title>PlayerDuo - Thuê người chơi</title>
            <link href="../resources/8.97b85fe3.chunk.css" rel="stylesheet"/>
            <link href="../resources/main.3e229f12.chunk.css" rel="stylesheet"/>
            <style type="text/css"
                   dangerouslySetInnerHTML={{__html: ".react-skeleton-load {\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n}\n\n.react-skeleton-load.animated::before {\n  content: '';\n  position: absolute;\n  height: 100%;\n  width: 500px;\n  top: 0;\n  left: -500px;\n  background-image: linear-gradient(90deg, rgba(255,255,255, 0), rgba(255,255,255, 0.6), rgba(255,255,255, 0));\n  animation: progress 1.2s ease-in-out infinite\n}\n\n@keyframes progress {\n  0% {\n    left: -500px\n  }\n  100% {\n    left: 100%\n  }\n}"}}/>
            <style
                dangerouslySetInnerHTML={{__html: ".emoji-picker-react ul.skin-tones-list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 13px;\n  right: 40px;\n}\n\n.emoji-picker-react ul.skin-tones-list li {\n  background-color: currentColor;\n  position: absolute;\n  padding: 0;\n  border-radius: 2px;\n  overflow: hidden;\n  transition: transform 0.3s ease;\n}\n\n.emoji-picker-react ul.skin-tones-list label {\n  height: 10px;\n  width: 10px;\n  padding: 0;\n  display: block;\n  cursor: pointer;\n}\n\n.emoji-picker-react ul.skin-tones-list input {\n  height: 0;\n  width: 0;\n  opacity: 0;\n  visibility: hidden;\n  display: none;\n}\n\n.emoji-picker-react ul.skin-tones-list li.tneutral {\n  color: #ffd225;\n}\n.emoji-picker-react ul.skin-tones-list li.t1f3fb {\n  color: #ffdfbd;\n}\n.emoji-picker-react ul.skin-tones-list li.t1f3fc {\n  color: #e9c197;\n}\n.emoji-picker-react ul.skin-tones-list li.t1f3fd {\n  color: #c88e62;\n}\n.emoji-picker-react ul.skin-tones-list li.t1f3fe {\n  color: #a86637;\n}\n.emoji-picker-react ul.skin-tones-list li.t1f3ff {\n  color: #60463a;\n}\n"}}/>
            <style
                dangerouslySetInnerHTML={{__html: ".emoji-picker-react img.emoji-img {\n  height: 25px;\n  width: 25px;\n  margin: 5px;\n}\n\n.emoji-picker-react .native {\n  height: 25px;\n  width: 25px;\n  margin: 5px;\n  font-size: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n"}}/>
            <style
                dangerouslySetInnerHTML={{__html: ".emoji-picker-react .variation-wrapper {\n  position: relative;\n}\n\n.emoji-picker-react .variation-list {\n  background: #f4f4f4;\n  border-bottom: 1px solid #efefef;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: space-evenly;\n  list-style-type: none;\n  transition: transform 0.1s;\n  transform: translateY(-100%);\n}\n\n.emoji-picker-react .variation-list.visible {\n  transform: translateY(0);\n}\n\n.emoji-picker-react .variation-list button {\n  display: flex;\n}\n\n.emoji-picker-react .variation-list button {\n  border-radius: 5px;\n  transition: background 0.1s;\n  background: none;\n  padding: 0;\n}\n\n.emoji-picker-react .variation-list button:hover {\n  background-color: #dbdbdb;\n}\n"}}/>
            <style
                dangerouslySetInnerHTML={{__html: ".emoji-picker-react .emoji-categories button {\n  height: 40px;\n  width: 20px;\n  padding: 5px 0;\n  background-repeat: no-repeat;\n  background-size: 20px;\n  background-position: 50% 50%;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.1s;\n}\n\n.emoji-picker-react .active-category-indicator-wrapper {\n  position: relative;\n  width: 100%;\n}\n.emoji-picker-react\n  .active-category-indicator-wrapper\n  .active-category-indicator {\n  background: #99c2f1;\n  height: 3px;\n  width: 5px;\n  position: absolute;\n  bottom: 3px;\n  border-radius: 5px;\n  transition: 0.3s;\n  width: 30px;\n  left: -7px;\n}\n\n.emoji-picker-react .emoji-categories button.icn-activities {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 0C14.355 0 0 14.355 0 32s14.355 32 32 32 32-14.355 32-32S49.645 0 32 0zm29.624 36.731l-3.885-6.439 2.681-7.88a29.867 29.867 0 0 1 1.204 14.319zm-7.558 15.567a.994.994 0 0 0-.408-.02L43.98 53.83a.993.993 0 0 0-.123-.345l-5.502-9.17 8.896-13.7h8.428a.992.992 0 0 0 .105.312l5.236 8.678a29.956 29.956 0 0 1-6.954 12.693zm-10.085 3.557l7.688-1.232a29.958 29.958 0 0 1-11.706 6.296l4.018-5.064zM12.65 9.1a29.858 29.858 0 0 1 18.628-7.082.982.982 0 0 0 .24.376l5.525 5.214-2.185 8.156-14.237 5.465c-.052-.042-.093-.094-.154-.126l-8.87-4.701L12.65 9.1zm25.736-2.976l-4.283-4.042a29.763 29.763 0 0 1 10.989 2.931l-6.706 1.111zM21.93 38.737l-.816-15.554L35.655 17.6l9.803 12.106-8.483 13.063-15.045-4.032zm37.375-19.141c-.031.054-.072.098-.093.159l-3.015 8.86h-9.048L36.882 15.937l2.113-7.887 8.27-1.371a.979.979 0 0 0 .453-.218 30.2 30.2 0 0 1 11.587 13.135zm-48.994-8.289l-.802 5.561-5.349 3.975a30.035 30.035 0 0 1 6.151-9.536zm-7.255 12.82c.044-.023.09-.037.131-.068l7.737-5.751 8.158 4.323.888 16.936c.002.025.013.048.016.073l-7.71 7.629c-.066.065-.105.145-.149.222L4.734 44.32c-.028-.012-.057-.009-.085-.018A29.822 29.822 0 0 1 2 32c0-2.725.372-5.362 1.056-7.873zm3.022 22.945l5.415 2.322 4.141 7.729a30.222 30.222 0 0 1-9.556-10.051zm12.759 11.879c-.019-.064-.025-.131-.058-.192l-5.317-9.924c.076-.043.155-.08.22-.145l8.027-7.942 14.507 3.888 5.927 9.879c.05.083.11.154.178.217l-5.449 6.867c-1.587.26-3.213.401-4.872.401-4.72 0-9.186-1.099-13.163-3.049z'/%3E%3C/svg%3E\");\n}\n.emoji-picker-react .emoji-categories button.icn-animals_nature {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 470 470'%3E%3Cpath d='M401.17 68.83C356.784 24.444 297.771 0 235 0S113.216 24.444 68.83 68.83 0 172.229 0 235s24.444 121.784 68.83 166.17S172.229 470 235 470s121.784-24.444 166.17-68.83S470 297.771 470 235s-24.444-121.784-68.83-166.17zM235 455c-121.309 0-220-98.691-220-220S113.691 15 235 15s220 98.691 220 220-98.691 220-220 220z'/%3E%3Cpath d='M382.5 173.979c3.532 0 6.735 1.824 8.568 4.879a7.499 7.499 0 0 0 12.864 0c1.833-3.055 5.036-4.879 8.568-4.879 4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5c-5.461 0-10.724 1.829-15 5.039-4.276-3.21-9.539-5.039-15-5.039-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5zM322.5 135.459c3.532 0 6.735 1.824 8.568 4.879a7.499 7.499 0 0 0 12.864 0c1.833-3.055 5.036-4.879 8.568-4.879 4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5c-5.461 0-10.724 1.829-15 5.039-4.276-3.21-9.539-5.039-15-5.039-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5zM117.5 173.979c3.532 0 6.735 1.824 8.568 4.879a7.499 7.499 0 0 0 12.864 0c1.833-3.055 5.036-4.879 8.568-4.879 4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5c-5.461 0-10.724 1.829-15 5.039-4.276-3.21-9.539-5.039-15-5.039-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5zM436.826 253.173a7.5 7.5 0 0 0-5.443-2.6c-12.664-.4-24.343-7.548-32.041-19.608a7.5 7.5 0 0 0-12.643-.001c-7.974 12.489-20.074 19.652-33.2 19.652-13.089 0-25.177-7.164-33.162-19.656a7.502 7.502 0 0 0-12.635-.004c-8 12.494-20.098 19.66-33.192 19.66-13.098 0-25.189-7.164-33.175-19.656a7.5 7.5 0 0 0-12.64.004c-7.974 12.489-20.069 19.652-33.187 19.652-13.098 0-25.19-7.164-33.176-19.656a7.502 7.502 0 0 0-12.635-.004c-8 12.494-20.098 19.66-33.191 19.66-13.099 0-25.19-7.164-33.175-19.655a7.5 7.5 0 0 0-12.64.004c-7.699 12.061-19.389 19.207-32.07 19.608a7.494 7.494 0 0 0-5.443 2.6 7.497 7.497 0 0 0-1.769 5.767c5.786 49.506 29.545 95.215 66.901 128.706C135.964 421.407 184.509 440 235 440c45.241 0 88.17-14.518 124.145-41.982a7.498 7.498 0 0 0 1.41-10.512 7.496 7.496 0 0 0-10.512-1.41C316.705 411.547 276.924 425 235 425c-93.882 0-173.276-68.424-187.68-160.366 11.265-2.217 21.561-8.215 29.707-17.284 10.49 11.584 24.673 18.267 39.476 18.267 14.808 0 29.002-6.691 39.505-18.291 10.493 11.6 24.685 18.291 39.498 18.291 14.828 0 29.022-6.689 39.511-18.284 10.493 11.595 24.682 18.284 39.491 18.284 14.808 0 29.002-6.691 39.505-18.291 10.493 11.6 24.679 18.291 39.485 18.291 14.826 0 29.018-6.681 39.505-18.264 8.14 9.065 18.422 15.061 29.671 17.278-6.044 38.177-24.008 74.246-51.068 102.269a7.5 7.5 0 1 0 10.791 10.419c31.08-32.185 51.038-74.226 56.198-118.38a7.495 7.495 0 0 0-1.769-5.766z'/%3E%3Cpath d='M289.513 310.616c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h10c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-10zM358.49 280.616h-10c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h10c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5zM111.503 280.616c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h10c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-10zM235 191.25c30.327 0 55-24.673 55-55s-24.673-55-55-55-55 24.673-55 55 24.673 55 55 55zm0-95c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40 17.944-40 40-40z'/%3E%3C/svg%3E\");\n}\n.emoji-picker-react .emoji-categories button.icn-flags {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 502 502'%3E%3Cpath d='M428.484 73.516C381.076 26.108 318.044 0 251 0S120.924 26.108 73.516 73.516 0 183.956 0 251s26.108 130.076 73.516 177.484S183.956 502 251 502s130.076-26.108 177.484-73.516C475.892 381.076 502 318.044 502 251s-26.108-130.076-73.516-177.484zM283.829 39h58.868c58.354 25.338 104.274 74.079 125.849 134.317h-41.725a21.139 21.139 0 0 0-19.587 13.087 21.139 21.139 0 0 0 4.595 23.104l3.3 3.3c4.638 4.637 4.638 12.184 0 16.821a11.42 11.42 0 0 1-8.13 3.368 11.422 11.422 0 0 1-8.13-3.368l-7.969-7.969c-13.135-13.135-30.599-20.369-49.175-20.369h-6.397v-8.036c0-19.265-7.502-37.376-21.124-50.999l-9.952-9.952c-10.216-10.216-23.799-15.843-38.247-15.843h-19.931c-7.721 0-14.98 3.007-20.439 8.466l-5.17 5.169c-5.459 5.459-8.466 12.718-8.466 20.439a4.736 4.736 0 0 1-4.73 4.73h-8.66v-12.154c0-8.648 3.368-16.78 9.483-22.895l5.849-5.849c5.244-5.243 8.131-12.214 8.131-19.629V92.71c0-.394.32-.713.713-.713H320.5c12.407 0 22.5-10.093 22.5-22.5S332.907 47 320.5 47h-36.671c-2.206 0-4-1.794-4-4s1.794-4 4-4zm74.893 252.437l-5.452 5.484a155.066 155.066 0 0 0-22.913 29.41l-9.918 16.5-12.403 20.492a48.673 48.673 0 0 0-7.036 25.21v.615a.857.857 0 0 1-.856.856h-.004a8.78 8.78 0 0 1-6.247-2.586 8.776 8.776 0 0 1-2.589-6.25c0-12.58-4.899-24.407-13.794-33.303l-4.591-4.591c-6.947-6.947-10.773-16.183-10.773-26.007v-29.475c0-14.806-12.045-26.851-26.852-26.851H231.8c-8.349 0-15.142-6.792-15.142-15.142v-15.343c0-9.034 7.35-16.384 16.384-16.384h79.886l24.099 24.1c6.003 6.003 9.309 13.984 9.309 22.473v11.464c0 8.56 5.082 15.955 12.386 19.328zM20 251c0-9.444.583-18.752 1.69-27.902h30.619c10.153 0 19.698 3.954 26.876 11.133l8.781 8.78c7.527 7.527 17.534 11.672 28.179 11.672 5.65 0 10.962 2.2 14.957 6.195l.193.193c7.233 7.233 11.217 16.851 11.217 27.081v17.886c0 13.63-5.308 26.444-14.945 36.082l-19.15 19.15c-13.442 13.443-21.939 30.512-24.58 49.002C44.303 368.799 20 312.684 20 251zm231 231c-56.288 0-107.93-20.247-148.049-53.827v-5.423c0-17.881 6.963-34.693 19.607-47.337l19.15-19.15c13.415-13.416 20.803-31.252 20.803-50.224v-17.886c0-15.573-6.064-30.213-17.075-41.224l-.193-.192c-7.772-7.772-18.106-12.053-29.099-12.053a19.72 19.72 0 0 1-14.036-5.814l-8.781-8.781c-10.957-10.956-25.524-16.99-41.019-16.99h-27.3C47.126 98.635 140.047 20 251 20c7.743 0 15.396.39 22.946 1.138-8.316 3.774-14.117 12.151-14.117 21.862 0 13.234 10.766 24 24 24H320.5c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5h-97.713c-11.421 0-20.713 9.292-20.713 20.713v2.028a7.706 7.706 0 0 1-2.273 5.486l-5.85 5.85c-9.893 9.893-15.341 23.047-15.341 37.037v13.574c0 10.245 8.334 18.58 18.579 18.58h10.081c13.636 0 24.73-11.094 24.73-24.73 0-2.379.926-4.615 2.608-6.297l5.169-5.169c.203-.203.414-.393.632-.574.167.195.334.389.518.574l19.932 19.932c-3.833 3.911-3.813 10.186.068 14.068 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929l7-7c3.905-3.905 3.905-10.237 0-14.143l-15.45-15.45c8.875.156 17.197 3.677 23.489 9.97l9.953 9.952c9.844 9.844 15.266 22.934 15.266 36.856v.817H233.04c-20.062 0-36.384 16.322-36.384 36.384V245.8c0 19.377 15.765 35.142 35.142 35.142h3.493a6.86 6.86 0 0 1 6.852 6.851v29.475c0 15.167 5.906 29.425 16.63 40.15l4.591 4.591c5.118 5.118 7.937 11.923 7.937 19.161 0 7.705 3.001 14.948 8.451 20.396 5.446 5.443 12.685 8.44 20.384 8.44h.015C311.648 410 321 400.644 321 389.149v-.614a28.68 28.68 0 0 1 4.146-14.854l12.409-20.502a.226.226 0 0 1 .016-.026l9.928-16.517a135.064 135.064 0 0 1 19.955-25.613l11.147-11.213c4.428-4.455 5.731-11.08 3.319-16.879s-8.029-9.546-14.31-9.546a1.274 1.274 0 0 1-1.273-1.273v-11.464c0-13.832-5.386-26.835-15.167-36.616l-2.215-2.215c10.49 1.524 20.173 6.357 27.804 13.988l7.969 7.969c6.141 6.141 14.207 9.211 22.272 9.211s16.132-3.07 22.272-9.211c6.024-6.024 9.341-14.033 9.341-22.553 0-8.519-3.317-16.528-9.341-22.553l-3.3-3.3c-.198-.198-.567-.567-.26-1.308.307-.741.829-.741 1.109-.741h47.888C479.468 211.761 482 231.09 482 251c0 127.374-103.626 231-231 231z'/%3E%3Cpath d='M184 85c5.523 0 10-4.477 10-10V54.494c0-5.523-4.477-10-10-10s-10 4.477-10 10V75c0 5.523 4.477 10 10 10zM450.39 314.63c-5.176-1.93-10.935.702-12.863 5.877C408.652 397.961 333.692 450 251 450c-5.523 0-10 4.477-10 10s4.477 10 10 10c45.543 0 89.207-13.849 126.272-40.048 36.24-25.617 63.556-61.046 78.995-102.458 1.929-5.175-.702-10.934-5.877-12.864zM202.433 444.034a198.232 198.232 0 0 1-28.554-9.526c-5.092-2.144-10.954.249-13.096 5.339-2.142 5.09.249 10.954 5.339 13.096a218.202 218.202 0 0 0 31.445 10.491c.817.205 1.635.303 2.44.303 4.478 0 8.554-3.03 9.692-7.57 1.344-5.358-1.909-10.79-7.266-12.133z'/%3E%3C/svg%3E\");\n}\n.emoji-picker-react .emoji-categories button.icn-food_drink {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M337.502 61.244c-46.267-19.341-98.094-21.573-145.933-6.282-5.497 1.758-8.528 7.638-6.772 13.134 1.758 5.497 7.64 8.528 13.134 6.772 43.115-13.782 89.819-11.772 131.51 5.657 1.317.55 2.682.811 4.026.811 4.087 0 7.969-2.415 9.644-6.422 2.228-5.324-.284-11.445-5.609-13.67zM368.323 77.252a11.31 11.31 0 0 0-.375-.239c-4.925-3.009-11.356-1.458-14.364 3.467-2.984 4.884-1.483 11.249 3.346 14.29a10.398 10.398 0 0 0 5.587 1.626c3.377 0 6.69-1.633 8.704-4.654 3.201-4.801 1.904-11.289-2.898-14.49zM447.293 161.884c-4.081-4.08-10.698-4.08-14.778 0l-14.629 14.629c-4.08 4.081-4.08 10.698 0 14.778 2.04 2.041 4.715 3.06 7.388 3.06s5.349-1.02 7.389-3.06l14.629-14.629c4.081-4.081 4.081-10.698.001-14.778zM83.999 214.617c-4.081-4.08-10.698-4.08-14.778 0l-14.629 14.629c-4.08 4.081-4.08 10.698 0 14.778 2.04 2.041 4.715 3.06 7.388 3.06s5.349-1.02 7.39-3.06l14.629-14.629c4.081-4.082 4.081-10.698 0-14.778zM115.508 100.235c-4.081-4.08-10.698-4.08-14.778 0l-14.629 14.629c-4.08 4.081-4.08 10.698 0 14.778 2.04 2.041 4.715 3.06 7.388 3.06s5.348-1.02 7.39-3.06l14.629-14.629c4.081-4.081 4.081-10.698 0-14.778zM386.754 116.24h-20.688c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h20.688c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449zM151.326 161.908l-14.618-14.618c-4.081-4.08-10.698-4.081-14.778 0s-4.08 10.698 0 14.778l14.618 14.618a10.413 10.413 0 0 0 7.388 3.06c2.674 0 5.349-1.02 7.39-3.06 4.081-4.081 4.081-10.698 0-14.778zM411.753 229.241l-14.618-14.617c-4.08-4.081-10.696-4.08-14.777 0s-4.08 10.697 0 14.777l14.618 14.617c2.041 2.041 4.715 3.06 7.388 3.06s5.348-1.021 7.388-3.06c4.083-4.08 4.082-10.696.001-14.777zM318.326 126.607l-14.617-14.617c-4.081-4.08-10.698-4.081-14.778 0s-4.08 10.698 0 14.778l14.617 14.617a10.414 10.414 0 0 0 7.388 3.061 10.42 10.42 0 0 0 7.39-3.061c4.08-4.081 4.08-10.698 0-14.778zM195.194 97.387c-3.904-4.25-10.515-4.528-14.763-.622l-15.22 13.989c-4.249 3.905-4.527 10.515-.622 14.763a10.42 10.42 0 0 0 7.696 3.378c2.528 0 5.063-.911 7.068-2.756l15.22-13.989c4.248-3.905 4.526-10.515.621-14.763zM256.153 145.241H255.865c-5.762 0-10.437 4.665-10.449 10.429-.011 5.771 4.658 10.457 10.429 10.469H256.134c5.762 0 10.438-4.664 10.449-10.429.01-5.771-4.659-10.458-10.43-10.469z'/%3E%3Cpath d='M437.019 74.981C388.668 26.628 324.38 0 256 0S123.332 26.628 74.981 74.981C26.629 123.333 0 187.62 0 256c0 68.38 26.628 132.668 74.981 181.019C123.333 485.371 187.62 512 256 512c68.38 0 132.668-26.628 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.628-132.668-74.981-181.019zM256 491.102c-94.256 0-175.718-55.763-213.173-136.024 6.781-.56 13.126-3.458 18.112-8.35 5.756-5.647 9.057-13.495 9.057-21.531v-9.364c0-7.449 6.027-13.624 13.435-13.767 3.561-.079 6.976 1.322 9.617 3.913 2.77 2.718 4.359 6.484 4.359 10.332v23.709c0 18.754 15.222 34.302 33.932 34.66.221.004.442.006.664.006 8.973 0 17.47-3.499 23.989-9.895 6.751-6.623 10.623-15.826 10.623-25.25v-18.215c20.172 27.524 52.723 45.432 89.384 45.432 52.209 0 96.09-36.312 107.73-85.007a10.027 10.027 0 0 1 2.18 6.23v25.773c0 19.673 15.968 35.984 35.596 36.361.233.004.464.006.696.006 9.409 0 18.321-3.671 25.161-10.38 7.086-6.951 11.149-16.61 11.149-26.5v-24.856c0-2.83 1.17-5.6 3.21-7.602 1.927-1.889 4.429-2.882 6.986-2.854 5.403.104 9.8 4.612 9.8 10.05v2.721c0 14.409 10.071 26.69 23.526 30.04C453.848 418.996 363.189 491.102 256 491.102zm223.405-200.399v-2.721c0-16.741-13.591-30.624-30.297-30.944-8.235-.159-16.057 2.978-22.022 8.829-6.021 5.906-9.473 14.113-9.473 22.52v24.856c0 4.314-1.782 8.536-4.886 11.582-2.97 2.912-6.846 4.462-10.82 4.397-8.326-.16-15.099-7.098-15.099-15.468v-25.773c0-13.154-8.392-24.538-20.091-28.971.027-1.001.043-2.004.043-3.011 0-46.06-29.007-87.788-72.182-103.836-5.411-2.01-11.425.745-13.434 6.154-2.01 5.409.745 11.424 6.154 13.434 35.027 13.021 58.562 46.877 58.562 84.248 0 49.549-40.312 89.861-89.861 89.861-49.549 0-89.861-40.312-89.861-89.861 0-37.372 23.535-71.228 58.565-84.246 5.409-2.01 8.164-8.026 6.154-13.434s-8.022-8.165-13.434-6.154C174.248 168.21 145.239 209.938 145.239 256a110.22 110.22 0 0 0 7.085 38.971 30.145 30.145 0 0 0-6.607 18.808v25.763c0 3.848-1.589 7.614-4.359 10.332-2.642 2.591-6.036 3.973-9.617 3.913-7.407-.142-13.434-6.317-13.434-13.766v-23.709c0-9.424-3.872-18.627-10.623-25.251-6.681-6.554-15.435-10.081-24.652-9.889-18.71.358-33.932 15.907-33.932 34.66v9.364c0 2.461-1.019 4.871-2.794 6.613-1.668 1.635-3.808 2.506-6.034 2.47-3.374-.065-6.387-2.139-7.733-5.21-7.543-23.011-11.64-47.569-11.64-73.07C20.898 126.365 126.365 20.898 256 20.898S491.102 126.365 491.102 256c0 15.182-1.464 30.026-4.227 44.414-4.281-1.138-7.47-5.083-7.47-9.711z'/%3E%3C/svg%3E\");\n}\n.emoji-picker-react .emoji-categories button.icn-objects {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 58.153 58.153'%3E%3Cpath d='M40.076 29.153h-7.142a3.995 3.995 0 0 0-2.858-2.858V16.153a1 1 0 1 0-2 0v10.142c-1.72.447-3 1.999-3 3.858 0 2.206 1.794 4 4 4 1.858 0 3.411-1.28 3.858-3h7.142a1 1 0 1 0 0-2zm-11 3c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z'/%3E%3Cpath d='M50.188 9.764l4.096 4.096a1 1 0 0 0 1.414 0c3.167-3.166 3.167-8.319 0-11.485s-8.319-3.166-11.485 0a.997.997 0 0 0 0 1.414l4.561 4.561-1.699 1.699c-4.78-4.284-11.089-6.896-17.998-6.896s-13.218 2.612-17.998 6.896l-1.7-1.699 4.561-4.561a.997.997 0 0 0 0-1.414c-3.166-3.166-8.318-3.166-11.485 0s-3.167 8.319 0 11.485a1 1 0 0 0 1.414 0l4.096-4.096 1.676 1.676c-4.679 4.857-7.565 11.453-7.565 18.713 0 9.898 5.357 18.564 13.321 23.265l-3.028 3.028a.999.999 0 1 0 1.414 1.414l3.45-3.45c3.578 1.754 7.597 2.743 11.843 2.743s8.265-.989 11.843-2.743l3.45 3.45a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-3.028-3.028c7.964-4.701 13.321-13.367 13.321-23.265 0-7.26-2.886-13.856-7.565-18.713l1.677-1.676zm4.095-5.975c2.146 2.146 2.362 5.502.649 7.893L46.391 3.14a6.13 6.13 0 0 1 7.892.649zM3.22 11.681c-1.713-2.39-1.497-5.746.649-7.892s5.502-2.361 7.892-.649L3.22 11.681zm25.856 43.472c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.214 25-25 25z'/%3E%3Cpath d='M29.076 10.032a1 1 0 0 0 1-1v-1a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1zM29.076 50.032a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1zM50.076 31.032h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM8.076 29.032h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM43.926 13.768l-.707.707a.999.999 0 1 0 1.414 1.414l.707-.707a.999.999 0 1 0-1.414-1.414zM13.52 44.174l-.707.707a.999.999 0 1 0 1.414 1.414l.707-.707a.999.999 0 1 0-1.414-1.414zM44.633 44.174a.999.999 0 1 0-1.414 1.414l.707.707a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-.707-.707zM14.227 13.768a.999.999 0 1 0-1.414 1.414l.707.707a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-.707-.707z'/%3E%3C/svg%3E\");\n}\n.emoji-picker-react .emoji-categories button.icn-smileys_people {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33 33'%3E%3Cpath d='M16.5 33C7.402 33 0 25.598 0 16.5S7.402 0 16.5 0 33 7.402 33 16.5 25.598 33 16.5 33zm0-32C7.953 1 1 7.953 1 16.5S7.953 32 16.5 32 32 25.047 32 16.5 25.047 1 16.5 1z'/%3E%3Cpath d='M16.5 33a16.38 16.38 0 0 1-9.549-3.06.5.5 0 1 1 .116-.876c4.146-1.535 4.815-2.781 4.815-5.169 0-.631-.142-.838-.398-1.214-.339-.494-.803-1.171-1.129-2.939-.048-.254-.089-.274-.316-.384-.606-.292-1.163-.712-1.309-2.628 0-.928.32-1.441.585-1.708-.058-.33-.153-.899-.242-1.519-.453-2.777-.473-6.178 3.433-7.759 3.404-1.38 6.121-.626 6.974.273.604.019 2.162.177 3.246 1.438 1.668 1.94 1.137 6.363.955 7.562.266.261.589.767.589 1.675-.146 1.954-.703 2.375-1.31 2.666-.228.11-.269.129-.316.384-.326 1.768-.789 2.445-1.128 2.939-.257.375-.398.583-.398 1.214 0 2.388.669 3.634 4.815 5.169a.498.498 0 0 1 .116.876A16.38 16.38 0 0 1 16.5 33zm-8.183-3.349C10.779 31.191 13.589 32 16.5 32s5.721-.809 8.183-2.349c-3.474-1.426-4.565-2.864-4.565-5.755 0-.941.278-1.348.573-1.779.304-.444.682-.996.971-2.556.139-.754.576-.964.865-1.103.311-.149.631-.303.744-1.803-.001-.764-.344-.972-.358-.98a.533.533 0 0 1-.264-.537c.248-1.329.656-5.474-.681-7.031-.913-1.062-2.352-1.091-2.626-1.08-.046-.004-.091-.005-.134-.016-.13-.033-.35-.146-.417-.262-.272-.466-2.641-1.403-5.91-.08-3.231 1.308-3.238 4.112-2.819 6.682.138.957.289 1.784.29 1.788a.5.5 0 0 1-.283.544c.003 0-.339.209-.339 1.008.112 1.461.433 1.616.743 1.765.289.139.727.349.866 1.103.288 1.56.666 2.112.97 2.556.296.431.574.838.574 1.779 0 2.894-1.091 4.332-4.566 5.757z'/%3E%3C/svg%3E\");\n}\n.emoji-picker-react .emoji-categories button.icn-symbols {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 490.4 490.4'%3E%3Cpath d='M229 381.2c4.4 4.4 10.1 6.8 16.3 6.8 6.2 0 12-2.4 16.3-6.8l96.3-96.3c15.7-15.7 24.4-36.6 24.4-58.7 0-22.2-8.6-43.1-24.3-58.8-15.7-15.7-36.6-24.3-58.7-24.3-20 0-38.9 7-54 19.9-15.1-13-34.1-20-54.1-20-22.2 0-43 8.6-58.7 24.3s-24.3 36.6-24.3 58.8 8.7 43 24.4 58.7l96.4 96.4zm-79.3-196.7c11.1-11.1 25.7-17.1 41.4-17.1s30.4 6.1 41.5 17.2l4 4c4.8 4.8 12.5 4.8 17.3 0l3.9-3.9c11.1-11.1 25.8-17.2 41.5-17.2 15.6 0 30.3 6.1 41.4 17.2 11.1 11.1 17.2 25.8 17.1 41.4 0 15.7-6.1 30.4-17.2 41.5l-95.3 95.3-95.5-95.5c-11.1-11.1-17.2-25.8-17.2-41.4 0-15.7 6.1-30.4 17.1-41.5z'/%3E%3Cpath d='M245.2 490.4c135.2 0 245.2-110 245.2-245.2S380.4 0 245.2 0 0 110 0 245.2s110 245.2 245.2 245.2zm0-465.9c121.7 0 220.7 99 220.7 220.7s-99 220.7-220.7 220.7-220.7-99-220.7-220.7 99-220.7 220.7-220.7z'/%3E%3C/svg%3E\");\n}\n.emoji-picker-react .emoji-categories button.icn-travel_places {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 470 470'%3E%3Cpath d='M401.17 68.83C356.784 24.444 297.771 0 235 0S113.216 24.444 68.83 68.83C24.444 113.215 0 172.229 0 235s24.444 121.785 68.83 166.17C113.216 445.556 172.229 470 235 470s121.784-24.444 166.17-68.83C445.556 356.785 470 297.771 470 235s-24.444-121.785-68.83-166.17zM235 455c-121.309 0-220-98.691-220-220S113.691 15 235 15s220 98.691 220 220-98.691 220-220 220z'/%3E%3Ccircle cx='235' cy='97.5' r='7.5'/%3E%3Cpath d='M437.56 242.365a7.501 7.501 0 0 0-5.467-2.365h-26.046v-22.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5V240H372.5v-52.5a7.5 7.5 0 0 0-3.525-6.36L292.5 133.343V97.5A7.5 7.5 0 0 0 285 90h-13.253C268.262 72.905 253.109 60 235 60s-33.262 12.905-36.747 30H185a7.5 7.5 0 0 0-7.5 7.5V130h-25v-22.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5V130H105a7.5 7.5 0 0 0-7.5 7.5v102.499l-59.593-.01a7.504 7.504 0 0 0-7.487 7.969c3.523 56.171 29.666 105.984 69.187 140.798.281.291.587.556.911.799 23.389 20.362 51.39 35.496 82.128 43.638.307.102.622.184.946.246A204.258 204.258 0 0 0 235 440c17.409 0 34.679-2.229 51.386-6.558a7.297 7.297 0 0 0 1.002-.262 203.842 203.842 0 0 0 50.574-20.966c30.222-17.629 55.631-42.86 73.479-72.965a7.5 7.5 0 0 0-12.902-7.65 189.49 189.49 0 0 1-26.039 34.299V255h51.438a188.457 188.457 0 0 1-12.616 50.728 7.499 7.499 0 0 0 4.156 9.758 7.498 7.498 0 0 0 9.758-4.157 203.511 203.511 0 0 0 14.342-63.359 7.499 7.499 0 0 0-2.018-5.605zM192.5 175h85v215h-85V175zm0-70H205a7.5 7.5 0 0 0 7.5-7.5c0-12.407 10.094-22.5 22.5-22.5s22.5 10.093 22.5 22.5a7.5 7.5 0 0 0 7.5 7.5h12.5v55h-85v-55zM46.059 254.99l51.441.009V307.5c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5V145h65v245H175c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h2.5v11.078c-24.056-7.668-46.091-20.018-65-35.997V337.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v28.458c-28.127-29.492-46.937-68.033-51.441-110.968zM192.5 420.179V405h85v15.106A187.644 187.644 0 0 1 235 425a189.427 189.427 0 0 1-42.5-4.821zm100-4.235V405h2.5c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-2.5V151.032l65 40.625v188.307a191.989 191.989 0 0 1-65 35.98z'/%3E%3Cpath d='M325 320a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM325 280a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM325 240a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM325 200a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM145 345a7.5 7.5 0 0 0 7.5-7.5v-10c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10a7.5 7.5 0 0 0 7.5 7.5zM145 305a7.5 7.5 0 0 0 7.5-7.5v-10c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10a7.5 7.5 0 0 0 7.5 7.5zM145 265a7.5 7.5 0 0 0 7.5-7.5v-10c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10a7.5 7.5 0 0 0 7.5 7.5zM145 185a7.5 7.5 0 0 0 7.5-7.5v-10c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10a7.5 7.5 0 0 0 7.5 7.5zM145 225a7.5 7.5 0 0 0 7.5-7.5v-10c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10a7.5 7.5 0 0 0 7.5 7.5zM235 350a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM235 310a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM235 270a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM235 230a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM235 190a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM215 145h40c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-40c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z'/%3E%3C/svg%3E\");\n}\n\n.emoji-picker-react .emoji-categories {\n  padding: 0 15px;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n\n.emoji-picker-react .emoji-categories.inactive button,\n.emoji-picker-react .emoji-categories.inactive button.active,\n.emoji-picker-react .emoji-categories.inactive button:hover {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.emoji-picker-react .emoji-categories button.active {\n  opacity: 1;\n}\n\n.emoji-picker-react .emoji-categories button:hover {\n  opacity: 0.7;\n}\n"}}/>
            <style
                dangerouslySetInnerHTML={{__html: ".emoji-picker-react .emoji {\n  position: relative;\n}\n\n.emoji-picker-react .emoji.has-skin-variation button:before {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  right: -2px;\n  bottom: 0px;\n  position: absolute;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(0, 0, 0, 0.1);\n  transform: rotate(135deg);\n  z-index: 1;\n}\n\n.emoji-picker-react .emoji.has-skin-variation button:hover:before,\n.emoji-picker-react .emoji.has-skin-variation button:focus-visible:before {\n  border-bottom: 4px solid rgba(0, 0, 0, 0.4);\n}\n\n.emoji-picker-react .emoji button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: inherit;\n  border-radius: 5px;\n  transition: 0.1s background;\n  padding: 0;\n  margin: 0;\n}\n\n.emoji-picker-react .emoji button:hover,\n.emoji-picker-react .emoji button:focus-visible {\n  background-color: currentColor;\n}\n"}}/>
            <style
                dangerouslySetInnerHTML={{__html: ".emoji-picker-react .emoji-group {\n  clear: both;\n  padding: 0 15px;\n  list-style: none;\n  margin: 0;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n}\n\n.emoji-picker-react .emoji-group:before {\n  content: attr(data-display-name);\n  color: #aaa;\n  font-size: 14px;\n  position: sticky;\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  z-index: 1;\n  top: 0;\n  text-transform: uppercase;\n  line-height: 45px;\n  font-weight: 700;\n}\n\n.emoji-picker-react .emoji-group:after {\n  content: '';\n  flex: 1000;\n  order: 99999;\n  flex-basis: 25px;\n}\n"}}/>
            <style
                dangerouslySetInnerHTML={{__html: ".emoji-picker-react input.emoji-search {\n  width: calc(100% - 30px);\n  margin-left: 15px;\n  outline: none;\n  box-shadow: none;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  transition: border 0.1s;\n}\n\n.emoji-picker-react input.emoji-search:focus {\n  border: 1px solid #d6d6d6;\n}\n"}}/>
            <style
                dangerouslySetInnerHTML={{__html: "aside.emoji-picker-react {\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  height: 320px;\n  width: 280px;\n  font-family: sans-serif;\n  border: 1px solid #efefef;\n  border-radius: 5px;\n  box-sizing: border-box;\n  box-shadow: 0 5px 10px #efefef;\n  overflow: hidden;\n  position: relative;\n}\n\naside.emoji-picker-react .content-wrapper {\n  flex: 1;\n  overflow-y: hidden;\n  position: relative;\n}\n\n.emoji-picker-react .emoji-scroll-wrapper {\n  overflow-y: scroll;\n  position: relative;\n  height: 100%;\n  box-sizing: border-box;\n}\n\naside.emoji-picker-react .content-wrapper:before {\n  content: attr(data-name);\n  color: #aaa;\n  font-size: 11px;\n  display: block;\n  position: absolute;\n  right: 15px;\n  z-index: 10;\n  line-height: 45px;\n  max-height: 45px;\n  overflow: hidden;\n  max-width: 100px;\n  text-overflow: ellipsis;\n  text-align: right;\n}\n\naside.emoji-picker-react button {\n  border: none;\n  cursor: pointer;\n  outline: none;\n  background: none;\n}\n"}}/>
            <link rel="stylesheet" type="text/css" href="../resources/0.cbdbec7b.chunk.css"/>
            <link rel="stylesheet" type="text/css" href="../resources/4.2ddfb1d3.chunk.css"/>
            <link rel="stylesheet" type="text/css" href="../resources/21.43626344.chunk.css"/>
            <link rel="stylesheet" type="text/css" href="../resources/9.cb7de3a7.chunk.css"/>
            <link rel="stylesheet" type="text/css" href="../resources/15.7bac9b00.chunk.css"/>
            <style type="text/css"
                   dangerouslySetInnerHTML={{__html: ".styles-module_carousel-base__3keqD {\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\toutline: none;\n\tposition: relative;\n}\n\n.styles-module_item-provider__YgMwz {\n\toverflow: hidden;\n\twidth: 100%;\n\tcursor: pointer;\n}\n\n.styles-module_item-container__a8zaY img {\n\t-webkit-user-select: none;\n\t        user-select: none;\n\t-webkit-user-drag: none;\n}\n\n.styles-module_item-tracker__3bypy {\n\theight: 100%;\n\tdisplay: flex;\n}\n\n.styles-module_carousel-arrow__26sRw {\n\tz-index: 1;\n}\n"}}/>
            <style type="text/css"
                   dangerouslySetInnerHTML={{__html: ".styles-module_carousel-navigation__1g_vs {\n\tdisplay: flex;\n\tposition: absolute;\n\tbottom: 0;\n}\n"}}/>
            <style type="text/css"
                   dangerouslySetInnerHTML={{__html: ".styles-module_sliderBase__swkx1 {\n\twidth: 100%;\n\tposition: relative;\n}\n\n.styles-module_slider__o0fqa {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tscrollbar-width: none; /* Firefox 64 */\n\t-ms-overflow-style: none; /* Internet Explorer 11 */\n}\n\n.styles-module_slider__o0fqa::-webkit-scrollbar {\n\t/** WebKit */\n\tdisplay: none;\n}\n\n.styles-module_slider__o0fqa > * {\n\tflex: 0 0 auto;\n}\n\n.styles-module_sliding__3T6T6 > * {\n\tpointer-events: none;\n}\n"}}/>
            <noscript>
                Bạn cần có cho phép Javascript hoạt động để chạy ứng dụng PlayerDuo.
            </noscript>
            <div id="root">
                <header className="menu__header" id="header-menu">
                    <div className="navbar-header">
                        <a href="/" className="logo">
                            <img
                                alt="logo playerduo"
                                src="https://files.playerduo.net/production/static-files/logo.png"
                            />
                        </a>
                    </div>
                    <div className="navbar">
                        <ul className="nav navbar-nav navbar-left">
                            <li className="item-search">
                                <nav className="Navbar__Item">
                                    <div className="Navbar__Link">
                                        <div className="Group-search visible ">
                  <span className="search input-group">
                    <input
                        placeholder="Nickname/Url ..."
                        type="text"
                        className="form-control"
                        defaultValue=""
                    />
                    <span className="input-group-addon">
                      <button type="button" className="btn btn-default">
                        <i className="fal fa-search" aria-hidden="true"/>
                      </button>
                    </span>
                  </span>
                                        </div>
                                    </div>
                                </nav>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-center">
                            <li className="item-icon">
                                <a className="group-user " href="/">
                                    <i className="fal fa-home-alt"/>
                                </a>
                            </li>
                            <li className="item-icon">
                                <a className="group-user " href="/stories">
                                    <i className="fal fa-camera-movie"/>
                                </a>
                            </li>
                            <li className="item-icon group-fb">
                                <a className="group-user">
                                    <i className="fal fa-trophy-alt"/>
                                </a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="item-icon notificate dropdown">
                                <a
                                    id="basic-nav-dropdown"
                                    role="button"
                                    className="dropdown-toggle"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    href="#"
                                >
                                    <div className="item-title">
                                        <i className="fal fa-bell"/>
                                    </div>
                                </a>
                                <ul
                                    role="menu"
                                    className="dropdown-menu"
                                    aria-labelledby="basic-nav-dropdown"
                                >
                                    <div className="content">
                                        <div className="tab-notif-common">
                                            <h5>
                                                <span>Thông báo</span>
                                            </h5>
                                            <div className="tab-action">
                                                <p className="active">
                                                    <span>Chính</span>
                                                </p>
                                                <p className="">
                                                    <span>Khác</span>
                                                </p>
                                                <p className="">
                                                    <span>Theo dõi</span>
                                                </p>
                                                <p className="">
                                                    <span>Tương tác</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                className="infinite-scroll-component "
                                                style={{height: 400, overflow: "auto"}}
                                            >
                                                <div
                                                    className="text-center"
                                                    style={{color: "rgb(51, 51, 51)"}}
                                                >
                                                    <span>Đợi chút xíu ...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="item-icon balance">
                                <a className="money-user">
                                    <i className="far fa-plus"/> 0 đ
                                </a>
                            </li>
                            <li className="item-icon item-avatar dropdown">
                                <a
                                    id="header-nav-dropdown"
                                    role="button"
                                    className="dropdown-toggle"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    href="#"
                                >
                                    <img
                                        src="https://files.playerduo.net/production/images/avatar10.png"
                                        className="avt-img"
                                        alt="PD"
                                    />
                                </a>
                                <ul
                                    role="menu"
                                    className="dropdown-menu"
                                    aria-labelledby="header-nav-dropdown"
                                >
                                    <li role="presentation" className="page-user">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <img
                                                src="https://files.playerduo.net/production/images/avatar10.png"
                                                className="avt-img"
                                                alt="PD"
                                            />
                                            <div className="text-logo">
                                                <h5>Name</h5>
                                                <p>
                                                    ID : <span>longgiang9999.gl@gmail.com</span>
                                                </p>
                                                <p className="label-user-page">
                                                    <span>Xem trang cá nhân của bạn</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item hidden-lg hidden-md">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-plus"/> <span>Số dư</span> :{" "}
                                            <span className="money">0 đ</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-minus"/> <span>Rút tiền</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-credit-card"/> <span>Mua thẻ</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-user-lock"/>{" "}
                                            <span>Tạo khóa bảo vệ</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-clock"/> <span>Lịch sử giao dịch</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-users"/> <span>Danh sách theo dõi</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-cogs"/> <span>Cài đặt tài khoản</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-power-off"/> <span>Đăng xuất</span>
                                        </a>
                                    </li>
                                    <div className="menu-item list-flag">
                                        <div className="box-item">
                                            <div className="flag-all active">
                                                <img
                                                    src="https://files.playerduo.net/production/static-files/flag/2.png"
                                                    className="flag flag-vn"
                                                    alt="PD"
                                                />
                                            </div>
                                            <div className="flag-all false">
                                                <img
                                                    src="https://files.playerduo.net/production/static-files/flag/1.png"
                                                    className="flag flag-en"
                                                    alt="PD"
                                                />
                                            </div>
                                        </div>
                                        <div className="box-item">
                                            <a
                                                href="https://www.facebook.com/groups/playerduovn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span>Group</span>
                                            </a>
                                            <a
                                                href="https://www.facebook.com/playerduo"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span>Fanpage</span>
                                            </a>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="item-icon mode">
                                <a className="group-user">
                                    <i className="fas fa-moon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-mobile hidden">
                        <ul className="navbar-nav">
                            <li className="item-icon notificate dropdown">
                                <a
                                    id="basic-nav-dropdown"
                                    role="button"
                                    className="dropdown-toggle"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    href="#"
                                >
                                    <div className="item-title">
                                        <i className="fal fa-bell"/>
                                    </div>
                                </a>
                                <ul
                                    role="menu"
                                    className="dropdown-menu"
                                    aria-labelledby="basic-nav-dropdown"
                                >
                                    <div className="content">
                                        <div className="tab-notif-common">
                                            <h5>
                                                <span>Thông báo</span>
                                            </h5>
                                            <div className="tab-action">
                                                <p className="active">
                                                    <span>Chính</span>
                                                </p>
                                                <p className="">
                                                    <span>Khác</span>
                                                </p>
                                                <p className="">
                                                    <span>Theo dõi</span>
                                                </p>
                                                <p className="">
                                                    <span>Tương tác</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                className="infinite-scroll-component "
                                                style={{height: 400, overflow: "auto"}}
                                            >
                                                <div
                                                    className="text-center"
                                                    style={{color: "rgb(51, 51, 51)"}}
                                                >
                                                    <span>Đợi chút xíu ...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="item-icon item-avatar dropdown">
                                <a
                                    id="header-nav-dropdown"
                                    role="button"
                                    className="dropdown-toggle"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    href="#"
                                >
                                    <img
                                        src="https://files.playerduo.net/production/images/avatar10.png"
                                        className="avt-img"
                                        alt="PD"
                                    />
                                </a>
                                <ul
                                    role="menu"
                                    className="dropdown-menu"
                                    aria-labelledby="header-nav-dropdown"
                                >
                                    <li role="presentation" className="page-user">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <img
                                                src="https://files.playerduo.net/production/images/avatar10.png"
                                                className="avt-img"
                                                alt="PD"
                                            />
                                            <div className="text-logo">
                                                <h5>Name</h5>
                                                <p>
                                                    ID : <span>longgiang9999.gl@gmail.com</span>
                                                </p>
                                                <p className="label-user-page">
                                                    <span>Xem trang cá nhân của bạn</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item hidden-lg hidden-md">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-plus"/> <span>Số dư</span> :{" "}
                                            <span className="money">0 đ</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-minus"/> <span>Rút tiền</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-credit-card"/> <span>Mua thẻ</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-user-lock"/>{" "}
                                            <span>Tạo khóa bảo vệ</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-clock"/> <span>Lịch sử giao dịch</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-users"/> <span>Danh sách theo dõi</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-cogs"/> <span>Cài đặt tài khoản</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="menu-item">
                                        <a role="menuitem" tabIndex={-1} href="#">
                                            <i className="fas fa-power-off"/> <span>Đăng xuất</span>
                                        </a>
                                    </li>
                                    <div className="menu-item list-flag">
                                        <div className="box-item">
                                            <div className="flag-all active">
                                                <img
                                                    src="https://files.playerduo.net/production/static-files/flag/2.png"
                                                    className="flag flag-vn"
                                                    alt="PD"
                                                />
                                            </div>
                                            <div className="flag-all false">
                                                <img
                                                    src="https://files.playerduo.net/production/static-files/flag/1.png"
                                                    className="flag flag-en"
                                                    alt="PD"
                                                />
                                            </div>
                                        </div>
                                        <div className="box-item">
                                            <a
                                                href="https://www.facebook.com/groups/playerduovn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span>Group</span>
                                            </a>
                                            <a
                                                href="https://www.facebook.com/playerduo"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span>Fanpage</span>
                                            </a>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <a className="btn-bars">
                            <i className="fal fa-bars"/>
                        </a>
                        <div className="flex-side hidden">
                            <div className="overlay"/>
                            <div className="content">
                                <div className="box-search">
                                    <nav className="Navbar__Item">
                                        <div className="Navbar__Link">
                                            <div className="Group-search visible ">
                    <span className="search input-group">
                      <input
                          placeholder="Nickname/Url ..."
                          type="text"
                          className="form-control"
                          defaultValue=""
                      />
                      <span className="input-group-addon">
                        <button type="button" className="btn btn-default">
                          <i className="fal fa-search" aria-hidden="true"/>
                        </button>
                      </span>
                    </span>
                                            </div>
                                        </div>
                                    </nav>
                                    <a className="btn-close">
                                        <i className="fal fa-times fa-2x"/>
                                    </a>
                                </div>
                                <ul className="list-page">
                                    <a href="/"/>
                                    <li className="item-icon ">
                                        <a href="/"/>
                                        <a className="group-user">
                                            <i className="fal fa-home-alt"/> <span>Trang chủ</span>
                                        </a>
                                    </li>
                                    <a href="/stories"/>
                                    <li className="item-icon ">
                                        <a href="/stories"/>
                                        <a className="group-user">
                                            <i className="fal fa-camera-movie"/> Stories
                                        </a>
                                    </li>
                                    <li className="item-icon">
                                        <a className="group-user">
                                            <i className="fal fa-trophy-alt"/> <span>Bảng xếp hạng</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="list-mode">
                                    <div className="item">
                                        <p className="title">
                                            <span>Chế độ</span>
                                        </p>
                                        <a className="func mode">
                                            <i className="fas fa-moon op"/>
                                            <i className="fas fa-sun false"/>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <p className="title">
                                            <span>Cộng đồng</span>
                                        </p>
                                        <div className="func group">
                                            <a
                                                href="https://www.facebook.com/groups/playerduovn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fal fa-globe"/>
                                            </a>
                                            <a
                                                href="https://www.facebook.com/playerduo"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-facebook-f"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <p className="title">
                                            <span>Ngôn ngữ</span>
                                        </p>
                                        <a className="func lang">
                                            <img
                                                src="https://files.playerduo.net/production/static-files/flag/1.png"
                                                className="flag op"
                                                alt="PD"
                                            />
                                            <img
                                                src="https://files.playerduo.net/production/static-files/flag/2.png"
                                                className="flag false"
                                                alt="PD"
                                            />
                                        </a>
                                    </div>
                                    <div className="item">
                                        <p className="title">
                                            <span>Tải App</span>
                                        </p>
                                        <div className="func app">
                                            <a
                                                href="/voice/app-release.apk"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                download=""
                                            >
                                                PlayerChat
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="hidden">
                    <audio src="/static/media/notification-sound.805a8904.mp3"/>
                    <audio
                        src="/static/media/notification-group-sound.4c7ac55b.mp3"
                        __idm_id__={1949697}
                    />
                    <audio src="/static/media/unconvinced.1de6c75d.mp3"/>
                </div>
                <div className="notifications-wrapper"/>
                <div className="message__popup  false">
                    <div className="message__popup--icon">
                        <img src="/favicons/popup-chat.png" className="" alt="PD"/>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="setting__main row">
                        <div className="setting__main--menu col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div className="menu">
                                <div className="menu__setting  panel-group">
                                    <div className="menu__setting--main panel panel-default">
                                        <div className="panel-heading">
                                            <div className="panel-title">
                                                <a aria-expanded="true" className="" role="button" href="#">
                                                    TÀI KHOẢN <i className="fas fa-chevron-down"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="panel-collapse collapse in" style={{}}>
                                            <div className="panel-body">
                                                <div className="panel-group">
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title">
                                                                <i className="fas fa-user-tie"/> Thông tin cá nhân{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title">
                                                                <i className="fas fa-sliders-h"/> Thống kê{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title">
                                                                <a
                                                                    aria-expanded="false"
                                                                    className="collapsed"
                                                                    role="button"
                                                                    href="#"
                                                                >
                                                                    <i className="fas fa-cog"/> Cài đặt{" "}
                                                                    <i className="fas fa-chevron-right"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Email</div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">
                                                                                Tài khoản và mật khẩu
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Khoá bảo vệ
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Vip</div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Hiển thị</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub active panel-title">
                                                                <a
                                                                    aria-expanded="true"
                                                                    className=""
                                                                    role="button"
                                                                    href="#"
                                                                >
                                                                    <i className="fas fa-history"/> Lịch sử giao
                                                                    dịch{" "}
                                                                    <i className="fas fa-chevron-down"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="panel-collapse collapse in" style={{}}>
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">
                                                                                Lịch sử donate
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Lịch sử duo
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">
                                                                                Lịch sử tạo code
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">
                                                                                Biến động số dư
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="active panel-title">
                                                                                Lịch sử mua thẻ
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title">
                                                                <i className="fas fa-credit-card"/> Thanh toán{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title">
                                                                <i className="fas fa-wallet"/> Ví{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu__setting--main panel panel-default">
                                        <div className="panel-heading">
                                            <div className="panel-title">
                                                <a
                                                    aria-expanded="false"
                                                    className="collapsed"
                                                    role="button"
                                                    href="#"
                                                >
                                                    TRANG CÁ NHÂN <i className="fas fa-chevron-right"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <div className="panel-group">
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title">
                                                                <a
                                                                    aria-expanded="false"
                                                                    className="collapsed"
                                                                    role="button"
                                                                    href="#"
                                                                >
                                                                    <i className="fas fa-tags"/> Hashtags{" "}
                                                                    <i className="fas fa-chevron-right"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">
                                                                                Dành cho sáng tạo nội dung
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title">
                                                                <a
                                                                    aria-expanded="false"
                                                                    className="collapsed"
                                                                    role="button"
                                                                    href="#"
                                                                >
                                                                    <i className="fas fa-cog"/> Cài đặt{" "}
                                                                    <i className="fas fa-chevron-right"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Url</div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Mạng xã hội
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Hiển thị</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title">
                                                                <a
                                                                    aria-expanded="false"
                                                                    className="collapsed"
                                                                    role="button"
                                                                    href="#"
                                                                >
                                                                    <i className="fas fa-users"/> Thành viên{" "}
                                                                    <i className="fas fa-chevron-right"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Bậc</div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">
                                                                                Danh sách thành viên
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">
                                                                                Lịch sử đã đăng ký
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title">
                                                                <a
                                                                    aria-expanded="false"
                                                                    className="collapsed"
                                                                    role="button"
                                                                    href="#"
                                                                >
                                                                    <i className="far fa-dot-circle"/> Mục tiêu{" "}
                                                                    <i className="fas fa-chevron-right"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Cài đặt</div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Lịch sử</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title">
                                                                <i className="fas fa-ban"/> Danh sách chặn comment{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu__setting--main panel panel-default">
                                        <div className="panel-heading">
                                            <div className="panel-title">
                                                <a
                                                    aria-expanded="false"
                                                    className="collapsed"
                                                    role="button"
                                                    href="#"
                                                >
                                                    VÍ ĐIỆN TỬ <i className="fas fa-chevron-right"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <div className="panel-group">
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title">
                                                                <a
                                                                    aria-expanded="false"
                                                                    className="collapsed"
                                                                    role="button"
                                                                    href="#"
                                                                >
                                                                    <i className="fas fa-credit-card"/> Cài đặt{" "}
                                                                    <i className="fas fa-chevron-right"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Thông tin</div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Lịch sử</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title">
                                                                <i className="fas fa-link"/> Link Pay{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu__setting--main panel panel-default">
                                        <div className="panel-heading">
                                            <div className="panel-title">
                                                <a
                                                    aria-expanded="false"
                                                    className="collapsed"
                                                    role="button"
                                                    href="#"
                                                >
                                                    PLAYER <i className="fas fa-chevron-right"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <div className="panel-group">
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title">
                                                                <i className="fas fa-user-tie"/> Tổng quan{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title">
                                                                <i className="fas fa-user-friends"/> Khách hàng
                                                                thân thiết{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title">
                                                                <a
                                                                    aria-expanded="false"
                                                                    className="collapsed"
                                                                    role="button"
                                                                    href="#"
                                                                >
                                                                    <i className="fas fa-cog"/> Cài đặt{" "}
                                                                    <i className="fas fa-chevron-right"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Url</div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">
                                                                                Thông tin Player
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">
                                                                                Albums Player
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Cài đặt Duo
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">Khác</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="title-sub  panel-title">
                                                                <a
                                                                    aria-expanded="false"
                                                                    className="collapsed"
                                                                    role="button"
                                                                    href="#"
                                                                >
                                                                    <i className="far fa-calendar-alt"/> Lịch sử nhận
                                                                    Duo, Donate <i className="fas fa-chevron-right"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="panel-collapse collapse">
                                                            <div className="panel-body">
                                                                <div className="panel-group">
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">
                                                                                Lịch sử nhận duo
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="menu__setting--last panel panel-default">
                                                                        <div className="panel-heading">
                                                                            <div className="panel-title">
                                                                                Lịch sử nhận donate
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title">
                                                                <i className="fas fa-ban"/> Danh sách chặn User{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title">
                                                                <i className="fas fa-book"/> Hướng Dẫn Player{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title">
                                                                <i className="fas fa-link"/> Link Player{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu__setting--main panel panel-default">
                                        <div className="panel-heading">
                                            <div className="panel-title">
                                                <a
                                                    aria-expanded="false"
                                                    className="collapsed"
                                                    role="button"
                                                    href="#"
                                                >
                                                    DONATE <i className="fas fa-chevron-right"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <div className="panel-group">
                                                    <div className="menu__setting--sub panel panel-default">
                                                        <div className="panel-heading">
                                                            <div className="  panel-title">
                                                                <i className="fas fa-cog"/> Cài đặt{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-drawer-setting visible-xs">
                                    <i className="fas fa-chevron-right"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="aside">
                                <h3>Lịch sử thuê</h3>
                                <div className="transaction-table">
                                    <div className="table-responsive">
                                        <table
                                            className="table table-striped table-bordered table-condensed table-hover">
                                            <thead>
                                            <tr>
                                                <th>Thời gian mua thẻ</th>
                                                <th>Loại thẻ</th>
                                                <th>Số seri</th>
                                                <th>Mã thẻ</th>
                                            </tr>
                                            </thead>
                                            <tbody/>
                                        </table>
                                    </div>
                                </div>
                                <div className="text-center mt-20 col-md-12">
                                    <span>Không có dữ liệu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}
export default HistoryProvider