var courseApi = 'http://localhost:8080/user/show';
var allPosts = [];

function start() {
    getCourses(renderCourses);
    getCourses(truyenid);
    getComment(renderComment);
    getComment(idcomment);
    getPhanHoi(rederPhanHoi);
}
start();
function truyenid(posts,position){

        return posts[position].id;

}
function idcomment(comments,position){
    return comments[position].id;
}

function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        // .then(callback);
        .then(function(posts) {
            allPosts = posts; // Cập nhật giá trị của biến toàn cục allPosts
            callback(posts);
        });
}

function renderCourses(courses) {
    console.log(courses);
    var listPost = document.getElementById('conainer');
    
    var htmls = courses.map(function (course) {
        var commentTime = course.thoigianbinhluan;
        var node = document.createElement("div");
        node.classList.add('nav-left-container-header-nav-container')
        console.log(data);
        node.innerHTML =`<div class="nav-left-container-header-nav-container__header">
        <div class="nav-left-container-header-nav-container__header-div--image"><img src="./image/avatar.png" alt="" class="nav-left-container-header-nav-container__header-image"></div>
        <div class="nav-left-container-header-nav-container__header-div--right">
            <h1 class="nav-left-container-header-nav-container__header-name">Nguyễn Duy Bách
            </h1>
            <span class="nav-left-container-header-nav-container__header-timeup"></span>
        </div>
    </div>
    <div class="nav-left-container-header-nav-container__content">
        <div class="nav-left-container-header-nav-container__content-all">
            <div class="nav-left-container-header-nav-container__title div-importain">
                ${course?.content ? course.content : ''}

            </div>
            <span class="span-xemthem" style="display: none;">Xem thêm</span>
        </div>

        <div class="nav-left-container-header-nav-container__image">
     
        </div>
        <div style="display: flex; flex-direction: row;">
            <div class="nav-left-container-header-nav-container__soluongcamxuc">
                <div>
                    <img src="./image/like.svg" alt="" class="nav-left-container-header-nav-container__soluongcamxuc-image">
                </div>
                <div>
                    <span style="line-height: 20px;" class="soluongthich">${course.like}</span> lượt
                    thích
                </div>
            </div>
            <div class="nav-left-container-header-nav-container__soluongcamxuc">
                <!-- <div>
                <img src="./image/like.svg" alt=""
                    class="nav-left-container-header-nav-container__soluongcamxuc-image">
            </div> -->
                <div>
                    <span style="line-height: 20px;" class="soluongbinhluan">0 </span> bình
                    luận
                </div>
            </div>
        </div>
        <div class="nav-left-container-header-nav-container__camxuc">
            <form action="#">
                <div class="nav-left-container-header-nav-container__camxuc-like">
                    <button type="submit" class="nav-left-container-header-nav-container__camxuc-like-submit" id="chualikediv">
                        <i class="fa-regular fa-thumbs-up" id="chualike"></i>
                        <!-- <i class="fa-solid fa-thumbs-up" id="dalike"></i> -->
                        <span>Thích</span>
                    </button>
                </div>
            </form>
            <form action="#">
                <div class="nav-left-container-header-nav-container__camxuc-binhluan">
                    <button type="submit" class="nav-left-container-header-nav-container__camxuc-binhluan-submit">
                        <i class="fa-regular fa-comment"></i>
                        <span>Bình luận</span>
                    </button>
                </div>
            </form>
        </div>

    </div>
    <div class="nav-left-container-header-nav-container__comment" style="display: none;">
        <div class="nav-left-container-header-nav-container-1">


        </div>
        <div class="submit-binhluan">

            <div class="nav-left-container-header-nav-container__header-div--image">
                <img src="./image/avatar.png" alt="" class="nav-left-container-header-nav-container__header-image">
            </div>
            <form action="">
                <div class="submit-binhluan-element__right">

                    <input type="text" placeholder="Viết bình luận..." class="submit-binhluan-element__right-input">
                    <div class="submit-binhluan-element__right-submit">
                        <button type="submit" class="submit-binhluan-element__right-submit--button" style="pointer-events: none;" onclick="postCreateCmt(${data}, ${course.id})">
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </button>
                    </div>

                </div>
            </form>

        </div>
    </div>`;
    var imgElement = document.createElement('img');
    var divcontainerimg= node.querySelector('.nav-left-container-header-nav-container__image');
    imgElement.alt = '';
    imgElement.classList.add('nav-left-container-header-nav-container__image-element');
    if (course.image) {
        imgElement.src = course.image;
    } else {
        imgElement.style.display = 'none';
    }
    var chuabinhluans= node.querySelector('.nav-left-container-header-nav-container-1');
    var quanlitybinhluan= node.querySelector('.soluongbinhluan');
    var vietbinhluan = node.querySelector('.submit-binhluan-element__right-input');
    var data;
    console.log(vietbinhluan);
    vietbinhluan.oninput = function (e){
        data=e.target.value;
    }
    var soluong=0;
    allComments.map(function (comment){
        if(course.id === comment.baiViet.id){
            soluong= soluong+1;
            var thoigianbinhluan=comment.thoigiandangbai;
            var newElement = document.createElement('div');
                newElement.classList.add('nav-left-container-header-nav-container__comment-user');
    
                // Thêm nội dung cho phần tử mới
                newElement.innerHTML = `
                
                    <div class="nav-left-container-header-nav-container__header">
                        <div class="nav-left-container-header-nav-container__header-div--image">
                            <img src="./image/avatar.png" alt="" class="nav-left-container-header-nav-container__header-image">
                        </div>
                        <div>
                            <div class="nav-left-container-header-nav-container__comment-user-right">
                                <h1 class="nav-left-container-header-nav-container__header-name-comment">Nguyễn Duy Bách</h1>
                                <span class="nav-left-container-header-nav-container__header-name-span">${comment.content}</span>
                                <div class="nav-left-container-header-nav-container__header-name-icon">
                                    <div class="nav-left-container-header-nav-container__header-name-icon--left">
                                        <img src="/image/like.svg" alt="" class="nav-left-container-header-nav-container__header-name-icon--like">
                                    </div>
                                    <div class="nav-left-container-header-nav-container__header-name-icon--right">
                                        <span class="nav-left-container-header-nav-container__header-name-icon--right-span">${comment?.like ? comment.like : '' }</span>
                                    </div>
                                </div>
                            </div>
                            <div class="nav-left-container-header-nav-container__comment-user-right--bottom">
                                <span class="nav-left-container-header-nav-container__header-timeup"></span>
                                <form action="#">
                                    <button class="nav-left-container-header-nav-container__comment-user-right--bottom-bnb-like">Thích</button>
                                </form>
                                <form action="#">
                                <button
                                    class="nav-left-container-header-nav-container__comment-user-right--bottom-bnb-cmt">
                                    Phản hồi
                                </button>
                            </form>
                            </div>
                        </div>
                   </div>
    
                   <div class="submit-binhluan2" style="display: none;">
    
                   <div
                       class="nav-left-container-header-nav-container__header-div--image2">
                       <img src="./image/avatar.png" alt=""
                           class="nav-left-container-header-nav-container__header-image2">
                   </div>
                   <form action="">
                       <div class="submit-binhluan-element__right">
    
                           <input type="text" placeholder="Viết bình luận..."
                               class="submit-binhluan-element__right-input2">
                           <div class="submit-binhluan-element__right-submit">
                               <button type="submit"
                                   class="submit-binhluan-element__right-submit--button2"
                                   style="pointer-events: none;">
                                   <i class="fa-solid fa-up-right-from-square"></i>
                               </button>
                           </div>
    
                       </div>
                   </form>
    
               </div>
                </div>`;
                chuabinhluans.appendChild(newElement);
            quanlitybinhluan.innerHTML= soluong;
         
            var timeupElement = newElement.querySelector('.nav-left-container-header-nav-container__header-timeup');
            setInterval(function() {
                var now = new Date();
                var secondsElapsed = Math.floor((now - thoigianbinhluan) / 1000);
                var minutesElapsed = Math.floor(secondsElapsed / 60);
                var hoursElapsed = Math.floor(minutesElapsed / 60);
                var daysElapsed = Math.floor(hoursElapsed / 24);
                var weeksElapsed = Math.floor(daysElapsed / 7);
                var monthsElapsed = Math.floor(daysElapsed / 30.44); // Sử dụng trung bình 30.44 ngày trong một tháng
                var yearsElapsed = Math.floor(daysElapsed / 365.25); // Sử dụng trung bình 365.25 ngày trong một năm (để tính toán năm nhuận)
            
                if (yearsElapsed > 0) {
                    timeupElement.textContent = yearsElapsed + ' năm trước';
                } else if (monthsElapsed > 0) {
                    timeupElement.textContent = monthsElapsed + ' tháng trước';
                } else if (weeksElapsed > 0) {
                    timeupElement.textContent = weeksElapsed + ' tuần trước';
                } else if (daysElapsed > 0) {
                    timeupElement.textContent = daysElapsed + ' ngày trước';
                } else if (hoursElapsed > 0) {
                    timeupElement.textContent = hoursElapsed + ' giờ trước';
                } else if (minutesElapsed > 0) {
                    timeupElement.textContent = minutesElapsed + ' phút trước';
                } else {
                    timeupElement.textContent = secondsElapsed + ' giây trước';
                }
            }, 1000);
           
       
            allReps.map(function (phanhoi){
                if(comment.id == phanhoi.binhluan.id){
                    var thoigianphanhoi=phanhoi.thoigianphanhoi;
                    console.log(phanhoi);
                    var newElement2 = document.createElement('div');
                    newElement2.classList.add('nav-left-container-header-nav-container__comment-user2');
                    newElement2.innerHTML=`<div class="nav-left-container-header-nav-container__header">
                    <div
                    class="nav-left-container-header-nav-container__header-div--image2">
                    <img src="./image/avatar.png" alt=""
                        class="nav-left-container-header-nav-container__header-image2">
                </div>
                    <div>
                        <div
                            class="nav-left-container-header-nav-container__comment-user-right">
                            <h1
                                class="nav-left-container-header-nav-container__header-name-comment">
                                Nguyễn Duy Bách
                            </h1>
                            <span
                                class="nav-left-container-header-nav-container__header-name-span">${phanhoi.content}</span>
                            <div
                                class="nav-left-container-header-nav-container__header-name-icon">
                                <div
                                    class="nav-left-container-header-nav-container__header-name-icon--left">
                                    <img src="/image/like.svg" alt=""
                                        class="nav-left-container-header-nav-container__header-name-icon--like">
                                </div>
                                <div
                                    class="nav-left-container-header-nav-container__header-name-icon--right">
                                    <span
                                        class="nav-left-container-header-nav-container__header-name-icon--right-span">${phanhoi.like}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="nav-left-container-header-nav-container__comment-user-right--bottom">
                            <span
                                class="nav-left-container-header-nav-container__header-timeup">
                                

                               </span>
                            <form action="#">
                                <button
                                    class="nav-left-container-header-nav-container__comment-user-right--bottom-bnb-like">
                                    Thích
                                </button>
                            </form>
                        </div>
                    </div>
                </div>`;
                    newElement.appendChild(newElement2);
                    var timeupElement2 = newElement2.querySelector('.nav-left-container-header-nav-container__header-timeup');
            setInterval(function() {
                var now = new Date();
                var secondsElapsed = Math.floor((now - thoigianphanhoi) / 1000);
                var minutesElapsed = Math.floor(secondsElapsed / 60);
                var hoursElapsed = Math.floor(minutesElapsed / 60);
                var daysElapsed = Math.floor(hoursElapsed / 24);
                var weeksElapsed = Math.floor(daysElapsed / 7);
                var monthsElapsed = Math.floor(daysElapsed / 30.44); // Sử dụng trung bình 30.44 ngày trong một tháng
                var yearsElapsed = Math.floor(daysElapsed / 365.25); // Sử dụng trung bình 365.25 ngày trong một năm (để tính toán năm nhuận)
            
                if (yearsElapsed > 0) {
                    timeupElement2.textContent = yearsElapsed + ' năm trước';
                } else if (monthsElapsed > 0) {
                    timeupElement2.textContent = monthsElapsed + ' tháng trước';
                } else if (weeksElapsed > 0) {
                    timeupElement2.textContent = weeksElapsed + ' tuần trước';
                } else if (daysElapsed > 0) {
                    timeupElement2.textContent = daysElapsed + ' ngày trước';
                } else if (hoursElapsed > 0) {
                    timeupElement2.textContent = hoursElapsed + ' giờ trước';
                } else if (minutesElapsed > 0) {
                    timeupElement2.textContent = minutesElapsed + ' phút trước';
                } else {
                    timeupElement2.textContent = secondsElapsed + ' giây trước';
                }
            }, 1000);

                }

            });
        }

    });
    var timeupElement = node.querySelector('.nav-left-container-header-nav-container__header-timeup');
    setInterval(function() {
        var now = new Date();
        var secondsElapsed = Math.floor((now - commentTime) / 1000);
        var minutesElapsed = Math.floor(secondsElapsed / 60);
        var hoursElapsed = Math.floor(minutesElapsed / 60);
        var daysElapsed = Math.floor(hoursElapsed / 24);
        var weeksElapsed = Math.floor(daysElapsed / 7);
        var monthsElapsed = Math.floor(daysElapsed / 30.44); // Sử dụng trung bình 30.44 ngày trong một tháng
        var yearsElapsed = Math.floor(daysElapsed / 365.25); // Sử dụng trung bình 365.25 ngày trong một năm (để tính toán năm nhuận)
    
        if (yearsElapsed > 0) {
            timeupElement.textContent = yearsElapsed + ' năm trước';
        } else if (monthsElapsed > 0) {
            timeupElement.textContent = monthsElapsed + ' tháng trước';
        } else if (weeksElapsed > 0) {
            timeupElement.textContent = weeksElapsed + ' tuần trước';
        } else if (daysElapsed > 0) {
            timeupElement.textContent = daysElapsed + ' ngày trước';
        } else if (hoursElapsed > 0) {
            timeupElement.textContent = hoursElapsed + ' giờ trước';
        } else if (minutesElapsed > 0) {
            timeupElement.textContent = minutesElapsed + ' phút trước';
        } else {
            timeupElement.textContent = secondsElapsed + ' giây trước';
        }
    }, 1000);

    
        divcontainerimg.appendChild(imgElement);
        return node;

    });
    

    // listPost.innerHTML = htmls.join('');
    htmls.forEach(function(node) {
        listPost.appendChild(node);
    });
    assignCommentEvent();
    assignLikeEvent();
    likePost();
    showbinhluan();
    nhapbinhluan();
    showxemthem();
    xemthem();
    console.log(listPost);
    
    // console.log(courses);
}
var allComments = [];

function getComment(callback) {
    var commentApi = 'http://localhost:8080/user/showBinhLuan';
    fetch(commentApi)
        .then(function (response) {
            return response.json();
        })
        .then(function(comments) {
            allComments = comments; // Cập nhật giá trị của biến toàn cục allPosts
            callback(comments);
        });

}

var allReps = [];
function getPhanHoi(callback){
    var phanhoiApi = 'http://localhost:8080/user/showPhanHoi';
    fetch(phanhoiApi)
        .then(function (response) {
            return response.json();
        })
        .then(function(phanhois) {
            allReps = phanhois; // Cập nhật giá trị của biến toàn cục allPosts
            callback(phanhois);
        });
}


function renderComment(comments){
    console.log(comments);
    var htmls = comments.map(function(comment){
        console.log(comment);
    });
}

function rederPhanHoi(phanhois){
    var htmls= phanhois.map(function(phanhoi){
        console.log(phanhoi);
    });
}


var dangbaiviet = document.getElementById('uploadbaiviet');
var baiviets = document.getElementsByClassName('nav-left-container-header-nav-container');
var formupload = document.getElementById('formupload');
var containerAll = document.getElementById('conainer');
var dongbaiviet = document.getElementById('dongbaiviet');




console.log(baiviets);
console.log(dangbaiviet);
var chech = false;
dangbaiviet.onclick = function () {
    if (!chech) {
        formupload.style.display = 'block';
        containerAll.classList.add('nav-left-container-header-navop');
        chech = true;
    } else {
        formupload.style.display = 'none';
        containerAll.classList.remove('nav-left-container-header-navop');
        chech = false;
    }
}
function dongbaidang() {
    dongbaiviet.onclick = function () {
        formupload.style.display = 'none';
        containerAll.classList.remove('nav-left-container-header-navop');
        chech = false;
    }
}
dongbaidang();
var dulieuanhs = [];
function laydulieuanh() {
    var chonanh = document.getElementById('chonanh');
    var divchonanh = document.getElementById('chon-anh');
    var createbaiviet = document.getElementById('create-baiviet');
    chonanh.onchange = function (e) {
        var file = e.target.files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            // Tạo một thẻ img mới
            var img = document.createElement('img');
            img.classList.add('showanhdachon');

            // Gắn dữ liệu ảnh vào thuộc tính src của thẻ img
            img.src = reader.result;
            
            dulieuanhs.push(img);
            console.log(dulieuanhs);

            createbaiviet.classList.add('create_baivietxanh');

            // Thêm thẻ img vào thẻ div
            divchonanh.appendChild(img);
        }

        if (file) {
            reader.readAsDataURL(file);
        }

        console.log(file);
    }
}
laydulieuanh();
var dulieunguoidungnhap;

function nguoidungnhaptext() {
    var bandangnghigi = document.getElementById('bandangnghigi');
    var createbaiviet = document.getElementById('create-baiviet');
    bandangnghigi.oninput = function (e) {
        console.log(e.target.value);
        // var duLieu=e.target.value;
        dulieunguoidungnhap = e.target.value;
        if (isNaN(dulieunguoidungnhap)) {
            createbaiviet.classList.add('create_baivietxanh');
        } else {
            createbaiviet.classList.remove('create_baivietxanh');
        }
    }
}
nguoidungnhaptext();

function likedidong() {
    var soluongthichs = document.getElementsByClassName('soluongthich');
    var chualikebuttons = document.getElementsByClassName('nav-left-container-header-nav-container__camxuc-like-submit');
    for (let i = 0; i < chualikebuttons.length; i++) {
        chualikebuttons[i].onclick = function () {
            var soluongthich1 = parseInt(soluongthichs[i].innerHTML);
            if (chualikes[i].classList.contains('fa-regular')) {
                chualikes[i].classList.replace('fa-regular', 'fa-solid');
                chualikebuttons[i].classList.toggle('xanh');
                if (!isNaN(soluongthich1)) {
                    soluongthichs[i].innerHTML = soluongthich1 + 1;
                } else {
                    soluongthichs[i].innerHTML = 1;
                }
            } else {
                chualikes[i].classList.replace('fa-solid', 'fa-regular');
                chualikebuttons[i].classList.toggle('xanh');
                soluongthichs[i].innerHTML = soluongthich1 - 1;
            }
        }
    }
}

function showbinhluan() {
    var binhluans = document.getElementsByClassName('nav-left-container-header-nav-container__camxuc-binhluan-submit');
    var binhluanlist = document.getElementsByClassName('nav-left-container-header-nav-container__comment');
    for (let i = 0; i < binhluans.length; i++) {
        binhluans[i].onclick = function () {
            if (binhluanlist[i].style.display === "block") {
                binhluanlist[i].style.display = "none";
            } else {
                binhluanlist[i].style.display = "block";
            }
        }

    }
}

function nhapbinhluan() {
    var vietbinhluans = document.getElementsByClassName('submit-binhluan-element__right-input');
    var submitbinhluans = document.getElementsByClassName('submit-binhluan-element__right-submit--button');
    // var divbinhluans = Array.from(document.getElementsByClassName('nav-left-container-header-nav-container__comment-user'));
    var divbinhluans = document.getElementsByClassName('nav-left-container-header-nav-container__comment-user');
    for (let i = 0; i < vietbinhluans.length; i++) {
        vietbinhluans[i].oninput = function (e) {
            var dulieu = e.target.value;
            console.log(dulieu);
            if (isNaN(dulieu)) {
                submitbinhluans[i].classList.add('xanh');
                console.log(submitbinhluans[i]);
                submitbinhluans[i].style.pointerEvents = 'auto';
                upbinhluan();

            } else {
                submitbinhluans[i].classList.remove('xanh');
                submitbinhluans[i].style.pointerEvents = 'none';
            }
        }

    }
}



function addPost() {
    var commentTime1 = new Date();
    commentTime1.setMinutes(commentTime1.getMinutes() - commentTime1.getTimezoneOffset());
    var mysqlFormat = commentTime1.toISOString().slice(0, 19).replace('T', ' ');
    console.log(commentTime1);
    console.log(mysqlFormat);
    var chuatatcabaiviet = document.getElementsByClassName('nav-left-container-header-nav')[0];
    var createbaiviet1 = document.getElementById('create-baiviet');


    createbaiviet1.onclick = function () {

        var newElement = document.createElement('div');
        newElement.classList.add('nav-left-container-header-nav-container');
        newElement.innerHTML = `<div class="nav-left-container-header-nav-container__header">
    <div class="nav-left-container-header-nav-container__header-div--image"><img
            src="./image/avatar.png" alt=""
            class="nav-left-container-header-nav-container__header-image"></div>
    <div class="nav-left-container-header-nav-container__header-div--right">
        <h1 class="nav-left-container-header-nav-container__header-name">Nguyễn Duy Bách
        </h1>
        <span class="nav-left-container-header-nav-container__header-timeup">0 giây trước</span>
    </div>
</div>
<div class="nav-left-container-header-nav-container__content">
    <div class="nav-left-container-header-nav-container__content-all">
        <div class="nav-left-container-header-nav-container__title div-importain">
            ${dulieunguoidungnhap}

        </div>
        <span class="span-xemthem" style="display: none;">Xem thêm</span>
    </div>

    <div class="nav-left-container-header-nav-container__image">
            
    </div>
    <div style="display: flex; flex-direction: row;">
        <div class="nav-left-container-header-nav-container__soluongcamxuc">
            <div>
                <img src="./image/like.svg" alt=""
                    class="nav-left-container-header-nav-container__soluongcamxuc-image">
            </div>
            <div>
                <span style="line-height: 20px;" class="soluongthich">0</span> lượt
                thích
            </div>
        </div>
        <div class="nav-left-container-header-nav-container__soluongcamxuc">
            <!-- <div>
            <img src="./image/like.svg" alt=""
                class="nav-left-container-header-nav-container__soluongcamxuc-image">
        </div> -->
            <div>
                <span style="line-height: 20px;" class="soluongbinhluan">0 </span> bình
                luận
            </div>
        </div>
    </div>
    <div class="nav-left-container-header-nav-container__camxuc">
        <form action="#">
            <div class="nav-left-container-header-nav-container__camxuc-like">
                <button type="submit"
                    class="nav-left-container-header-nav-container__camxuc-like-submit"
                    id="chualikediv">
                    <i class="fa-regular fa-thumbs-up" id="chualike"></i>
                    <!-- <i class="fa-solid fa-thumbs-up" id="dalike"></i> -->
                    <span>Thích</span>
                </button>
            </div>
        </form>
        <form action="#">
            <div class="nav-left-container-header-nav-container__camxuc-binhluan">
                <button type="submit"
                    class="nav-left-container-header-nav-container__camxuc-binhluan-submit">
                    <i class="fa-regular fa-comment"></i>
                    <span>Bình luận</span>
                </button>
            </div>
        </form>
    </div>

</div>
<div class="nav-left-container-header-nav-container__comment" style="display: none;">
    <div class="nav-left-container-header-nav-container-1">


    
    </div>
    <div class="submit-binhluan">

        <div class="nav-left-container-header-nav-container__header-div--image">
            <img src="./image/avatar.png" alt=""
                class="nav-left-container-header-nav-container__header-image">
        </div>
        <form action="">
            <div class="submit-binhluan-element__right">

                <input type="text" placeholder="Viết bình luận..."
                    class="submit-binhluan-element__right-input">
                <div class="submit-binhluan-element__right-submit">
                    <button type="submit"
                        class="submit-binhluan-element__right-submit--button"
                        style="pointer-events: none;">
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </button>
                </div>

            </div>
        </form>

    </div>
</div>`;
        console.log(dulieuanhs);
        chuatatcabaiviet.appendChild(newElement);


        var timeupElement = newElement.querySelector('.nav-left-container-header-nav-container__header-timeup');
        var bandangnghigi = document.getElementById('bandangnghigi');
        // Lưu thời điểm bình luận
        var commentTime = new Date();
        setInterval(function () {
            var now = new Date();
            var secondsElapsed = Math.floor((now - commentTime) / 1000);
            var minutesElapsed = Math.floor(secondsElapsed / 60);
            var hoursElapsed = Math.floor(minutesElapsed / 60);
            var daysElapsed = Math.floor(hoursElapsed / 24);
            var weeksElapsed = Math.floor(daysElapsed / 7);
            var monthsElapsed = Math.floor(daysElapsed / 30.44); // Sử dụng trung bình 30.44 ngày trong một tháng
            var yearsElapsed = Math.floor(daysElapsed / 365.25); // Sử dụng trung bình 365.25 ngày trong một năm (để tính toán năm nhuận)

            if (yearsElapsed > 0) {
                timeupElement.textContent = yearsElapsed + ' năm trước';
            } else if (monthsElapsed > 0) {
                timeupElement.textContent = monthsElapsed + ' tháng trước';
            } else if (weeksElapsed > 0) {
                timeupElement.textContent = weeksElapsed + ' tuần trước';
            } else if (daysElapsed > 0) {
                timeupElement.textContent = daysElapsed + ' ngày trước';
            } else if (hoursElapsed > 0) {
                timeupElement.textContent = hoursElapsed + ' giờ trước';
            } else if (minutesElapsed > 0) {
                timeupElement.textContent = minutesElapsed + ' phút trước';
            } else {
                timeupElement.textContent = secondsElapsed + ' giây trước';
            }
        }, 1000);

        var navElement = newElement.querySelector('.nav-left-container-header-nav-container__image');
        var imgs = []; // Tạo mảng imgs
        for (let i = 0; i < dulieuanhs.length; i++) {
            var img = document.createElement('img');

            img.classList.add('nav-left-container-header-nav-container__image-element');

            // Gắn dữ liệu ảnh vào thuộc tính src của thẻ img
            img = dulieuanhs[i];
            console.log(navElement);
            img.classList.replace('showanhdachon', 'nav-left-container-header-nav-container__image-element');
            // Thêm thẻ img vào thẻ div
            navElement.appendChild(img);
            console.log(dulieunguoidungnhap);
            console.log(dulieuanhs[0]);
            imgs.push(img);
            dulieuanhs = [];
            bandangnghigi.value = '';
        }
        var formData = {
            title: dulieunguoidungnhap,
            time: mysqlFormat,
            images: imgs.map(function (img) {
                return img.currentSrc != null ? img.currentSrc : '';
            })

        }
        createPost(formData, function () {
            getCourses(renderCourses);
            console.log("HELLO");
        });
        dulieuanhs = [];
        bandangnghigi.value = '';


        formupload.style.display = 'none';
        containerAll.classList.remove('nav-left-container-header-navop');
        chech = false;
        likedidong();
        showbinhluan();
        nhapbinhluan();
        window.location.reload();
    }


}

addPost();


var postApi = 'http://localhost:8080/user/create-post';

function createPost(data, callback) {
    console.log("hello");
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(postApi, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);

}
var likeApi= 'http://localhost:8080/user/post-updateLike';
function postUpdateLike(data, callback) {
    console.log("hello");
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(likeApi, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);

}


function postCreateCmt(data,callback) {
    var binhluanApi= 'http://localhost:8080/user/post-createBinhLuan';
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(binhluanApi, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);

}

function createPhanHoi(data, callback){
    var phanhoiApi= 'http://localhost:8080/user/binhluan-createPhanhoi';
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(phanhoiApi, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}