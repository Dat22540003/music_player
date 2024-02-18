// // Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// // Some songs may be faulty due to broken links. Please replace another link so that it can be played

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const PlAYER_STORAGE_KEY = "F8_PLAYER";

// const player = $(".player");
// const cd = $(".cd");
// const heading = $("header h2");
// const cdThumb = $(".cd-thumb");
// const audio = $("#audio");
// const playBtn = $(".btn-toggle-play");
// const progress = $("#progress");
// const prevBtn = $(".btn-prev");
// const nextBtn = $(".btn-next");
// const randomBtn = $(".btn-random");
// const repeatBtn = $(".btn-repeat");
// const playlist = $(".playlist");

// const app = {
//     currentIndex: 0,
//     isPlaying: false,
//     isRandom: false,
//     isRepeat: false,
//     config: {},
//     // (1/2) Uncomment the line below to use localStorage
//     // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
//     songs: [
//         {
//             name: "The Spectre",
//             singer: "Alan Walker",
//             path: "assets/songs/Alan Walker  The Spectre (Lyrics - Lyrics Video).mp3",
//             image: "assets/images/Alan Walker - Faded.jpg"
//         },
//         {
//             name: "Alone",
//             singer: "Alan Walker",
//             path: "assets/songs/Alan Walker - Alone (Lyrics).mp3",
//             image: "assets/images/Alan Walker - Alone.jpg"
//         },
//         {
//             name: "Faded",
//             singer: "Alan Walker",
//             path: "assets/songs/Alan Walker - Faded (Lyrics).mp3",
//             image: "assets/images/Alan Walker - Faded.jpg"
//         },
//         {
//             name: "Criminal",
//             singer: "Britney Spears",
//             path: "assets/songs/Britney Spears - Criminal (Lyrics).mp3",
//             image: "assets/images/Britney Spears - Criminal.jpg"
//         },
//         {
//             name: "Havana",
//             singer: "Camila Cabello",
//             path: "assets/songs/Camila Cabello - Havana (Audio) ft. Young Thug.mp3",
//             image: "assets/images/Camila Cabello - Havana.jpg"
//         },
//         {
//             name: "Dancin",
//             singer: "Aaron Smith",
//             path: "assets/songs/Dancin - Aaron Smith (lyrics) @pizzamusic3142.mp3",
//             image: "assets/images/Aaron Smith - dancin.jpg"
//         },
//         {
//             name: "Summertime",
//             singer: "K-391",
//             path: "assets/songs/K-391 - Summertime [Sunshine].mp3",
//             image: "assets/images/K-391 - Summertime.jpg"
//         },
//         {
//             name: "Lemon tree",
//             singer: "Fools Garden",
//             path: "assets/songs/LEMON TREE-Fools Garden(lyrics).mp3",
//             image: "assets/images/Lemon tree - Fools Garden.jpg"
//         },
//         {
//             name: "Memories",
//             singer: "Maroon 5",
//             path: "assets/songs/Maroon 5 - Memories - Lyrics.mp3",
//             image: "assets/images/Memories - Maroon 5.jpg"
//         },
//         {
//             name: "Monsters",
//             singer: "Katie Sky",
//             path: "assets/songs/Monsters - Katie Sky (Lyrics + Vietsub) .mp3",
//             image: "assets/images/Monsters - Katie Sky.jpg"
//         },
//         {
//             name: "Wellerman",
//             singer: "Nathan Evans",
//             path: "assets/songs/Nathan Evans - Wellerman (Sea Shanty).mp3",
//             image: "assets/images/Wellerman - Nathans Evans.jpg"
//         },
//         {
//             name: "Nevada",
//             singer: "Vicetone",
//             path: "assets/songs/Nevada (Lyrics) - Vicetone feat Cozi Zuehlsdorff.mp3",
//             image: "assets/images/Nevada.jpg"
//         },
//         {
//             name: "Reality",
//             singer: "Lost Frequencies",
//             path: "assets/songs/Reality - Lost Frequencies - Lyrics + Vietsub..mp3",
//             image: "assets/images/Reality.jpg"
//         },
//         {
//             name: "Señorita",
//             singer: "Shawn Mendes x Camila Cabello",
//             path: "assets/songs/Shawn Mendes, Camila Cabello - Señorita (Lyrics) Letra.mp3",
//             image: "assets/images/Senorita.png"
//         },
//         {
//             name: "Unstopable",
//             singer: "Sia",
//             path: "assets/songs/Sia - Unstoppable (Lyrics).mp3",
//             image: "assets/images/Unstopable.jpg"
//         },
//         {
//             name: "Monody",
//             singer: "Laura Brehm",
//             path: "assets/songs/TheFatRat - Monody (Lyrics) feat. Laura Brehm.mp3",
//             image: "assets/images/Monody.jpg"
//         },
//         {
//             name: "Dance Monkey",
//             singer: "Tones and I",
//             path: "assets/songs/Tones and I - Dance Monkey (Lyrics).mp3",
//             image: "assets/images/Dance Monkey.jpg"
//         },

//     ],
//     setConfig: function (key, value) {
//         this.config[key] = value;
//         // (2/2) Uncomment the line below to use localStorage
//         // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
//     },
//     render: function () {
//         const htmls = this.songs.map((song, index) => {
//             return `
//                         <div class="song ${index === this.currentIndex ? "active" : ""
//                 }" data-index="${index}">
//                             <div class="thumb"
//                                 style="background-image: url('${song.image}')">
//                             </div>
//                             <div class="body">
//                                 <h3 class="title">${song.name}</h3>
//                                 <p class="author">${song.singer}</p>
//                             </div>
//                             <div class="option">
//                                 <i class="fas fa-ellipsis-h"></i>
//                             </div>
//                         </div>
//                     `;
//         });
//         playlist.innerHTML = htmls.join("");
//     },
//     defineProperties: function () {
//         Object.defineProperty(this, "currentSong", {
//             get: function () {
//                 return this.songs[this.currentIndex];
//             }
//         });
//     },
//     handleEvents: function () {
//         const _this = this;
//         const cdWidth = cd.offsetWidth;

//         // Xử lý CD quay / dừng
//         // Handle CD spins / stops
//         const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
//             duration: 10000, // 10 seconds
//             iterations: Infinity
//         });
//         cdThumbAnimate.pause();

//         // Xử lý phóng to / thu nhỏ CD
//         // Handles CD enlargement / reduction
//         document.onscroll = function () {
//             const scrollTop = window.scrollY || document.documentElement.scrollTop;
//             const newCdWidth = cdWidth - scrollTop;

//             cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
//             cd.style.opacity = newCdWidth / cdWidth;
//         };

//         // Xử lý khi click play
//         // Handle when click play
//         playBtn.onclick = function () {
//             if (_this.isPlaying) {
//                 audio.pause();
//             } else {
//                 audio.play();
//             }
//         };

//         // Khi song được play
//         // When the song is played
//         audio.onplay = function () {
//             _this.isPlaying = true;
//             player.classList.add("playing");
//             cdThumbAnimate.play();
//         };

//         // Khi song bị pause
//         // When the song is pause
//         audio.onpause = function () {
//             _this.isPlaying = false;
//             player.classList.remove("playing");
//             cdThumbAnimate.pause();
//         };

//         // Khi tiến độ bài hát thay đổi
//         // When the song progress changes
//         audio.ontimeupdate = function () {
//             if (audio.duration) {
//                 const progressPercent = Math.floor(
//                     (audio.currentTime / audio.duration) * 100
//                 );
//                 progress.value = progressPercent;
//             }
//         };

//         // Xử lý khi tua song
//         // Handling when seek
//         progress.onchange = function (e) {
//             const seekTime = (audio.duration / 100) * e.target.value;
//             audio.currentTime = seekTime;
//         };

//         // Khi next song
//         // When next song
//         nextBtn.onclick = function () {
//             if (_this.isRandom) {
//                 _this.playRandomSong();
//             } else {
//                 _this.nextSong();
//             }
//             audio.play();
//             _this.render();
//             _this.scrollToActiveSong();
//             this.style.color = "var(--primary-color)";
//             setTimeout(() => { this.style.color = "#666" }, 300);
//         };

//         // Khi prev song
//         // When prev song
//         prevBtn.onclick = function () {
//             if (_this.isRandom) {
//                 _this.playRandomSong();
//             } else {
//                 _this.prevSong();
//             }
//             audio.play();
//             _this.render();
//             _this.scrollToActiveSong();
//             this.style.color = "var(--primary-color)";
//             setTimeout(() => { this.style.color = "#666" }, 300);
//         };

//         // Xử lý bật / tắt random song
//         // Handling on / off random song
//         randomBtn.onclick = function (e) {
//             _this.isRandom = !_this.isRandom;
//             _this.setConfig("isRandom", _this.isRandom);
//             randomBtn.classList.toggle("active", _this.isRandom);
//         };

//         // Xử lý lặp lại một song
//         // Single-parallel repeat processing
//         repeatBtn.onclick = function (e) {
//             _this.isRepeat = !_this.isRepeat;
//             _this.setConfig("isRepeat", _this.isRepeat);
//             repeatBtn.classList.toggle("active", _this.isRepeat);
//         };

//         // Xử lý next song khi audio ended
//         // Handle next song when audio ended
//         audio.onended = function () {
//             if (_this.isRepeat) {
//                 audio.play();
//             } else {
//                 nextBtn.click();
//             }
//         };

//         // Lắng nghe hành vi click vào playlist
//         // Listen to playlist clicks
//         playlist.onclick = function (e) {
//             const songNode = e.target.closest(".song:not(.active)");

//             if (songNode || e.target.closest(".option")) {
//                 // Xử lý khi click vào song
//                 // Handle when clicking on the song
//                 if (songNode) {
//                     _this.currentIndex = Number(songNode.dataset.index);
//                     _this.loadCurrentSong();
//                     _this.render();
//                     audio.play();
//                 }

//                 // Xử lý khi click vào song option
//                 // Handle when clicking on the song option
//                 if (e.target.closest(".option")) {
//                 }
//             }
//         };
//     },
//     scrollToActiveSong: function () {
//         setTimeout(() => {
//             $(".song.active").scrollIntoView({
//                 behavior: "smooth",
//                 block: "nearest"
//             });
//         }, 300);
//     },
//     loadCurrentSong: function () {
//         heading.textContent = this.currentSong.name;
//         cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
//         audio.src = this.currentSong.path;
//     },
//     loadConfig: function () {
//         this.isRandom = this.config.isRandom;
//         this.isRepeat = this.config.isRepeat;
//     },
//     nextSong: function () {
//         this.currentIndex++;
//         if (this.currentIndex >= this.songs.length) {
//             this.currentIndex = 0;
//         }
//         this.loadCurrentSong();
//     },
//     prevSong: function () {
//         this.currentIndex--;
//         if (this.currentIndex < 0) {
//             this.currentIndex = this.songs.length - 1;
//         }
//         this.loadCurrentSong();
//     },
//     playRandomSong: function () {
//         let newIndex;
//         do {
//             newIndex = Math.floor(Math.random() * this.songs.length);
//         } while (newIndex === this.currentIndex);

//         this.currentIndex = newIndex;
//         this.loadCurrentSong();
//     },
//     start: function () {
//         // Gán cấu hình từ config vào ứng dụng
//         // Assign configuration from config to application
//         this.loadConfig();

//         // Định nghĩa các thuộc tính cho object
//         // Defines properties for the object
//         this.defineProperties();

//         // Lắng nghe / xử lý các sự kiện (DOM events)
//         // Listening / handling events (DOM events)
//         this.handleEvents();

//         // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
//         // Load the first song information into the UI when running the app
//         this.loadCurrentSong();

//         // Render playlist
//         this.render();

//         // Hiển thị trạng thái ban đầu của button repeat & random
//         // Display the initial state of the repeat & random button
//         randomBtn.classList.toggle("active", this.isRandom);
//         repeatBtn.classList.toggle("active", this.isRepeat);
//     }
// };

// app.start();



const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,

    songs: [
        {
            name: "The Spectre",
            singer: "Alan Walker",
            path: "assets/songs/Alan Walker  The Spectre (Lyrics - Lyrics Video).mp3",
            image: "assets/images/Alan Walker - Faded.jpg"
        },
        {
            name: "Summertime",
            singer: "K-391",
            path: "assets/songs/K-391 - Summertime [Sunshine].mp3",
            image: "assets/images/K-391 - Summertime.jpg"
        },
        {
            name: "Alone",
            singer: "Alan Walker",
            path: "assets/songs/Alan Walker - Alone (Lyrics).mp3",
            image: "assets/images/Alan Walker - Alone.jpg"
        },
        {
            name: "Lily",
            singer: "Alan Walker - Lily ft. K-391 & Emelie Hollow",
            path: "assets/songs/Alan Walker - Lily ft. K-391 & Emelie Hollow (Official Lyric Video).mp3",
            image: "assets/images/Alan Walker, K-391 & Emelie Hollow.jpg"
        },
        {
            name: "Faded",
            singer: "Alan Walker",
            path: "assets/songs/Alan Walker - Faded (Lyrics).mp3",
            image: "assets/images/Alan Walker - Faded.jpg"
        },
        {
            name: "Criminal",
            singer: "Britney Spears",
            path: "assets/songs/Britney Spears - Criminal (Lyrics).mp3",
            image: "assets/images/Britney Spears - Criminal.jpg"
        },
        {
            name: "Havana",
            singer: "Camila Cabello",
            path: "assets/songs/Camila Cabello - Havana (Audio) ft. Young Thug.mp3",
            image: "assets/images/Camila Cabello - Havana.jpg"
        },
        {
            name: "Dancin",
            singer: "Aaron Smith",
            path: "assets/songs/Dancin - Aaron Smith (lyrics) @pizzamusic3142.mp3",
            image: "assets/images/Aaron Smith - dancin.jpg"
        },
        {
            name: "Ignite",
            singer: "K-391 & Alan Walker",
            path: "assets/songs/K-391 & Alan Walker - Ignite feat. Julie Bergan & Seungri (Lyric Video).mp3",
            image: "assets/images/K-391 & Alan Walker - Ignite.jpg"
        },
        {
            name: "Lemon tree",
            singer: "Fools Garden",
            path: "assets/songs/LEMON TREE-Fools Garden(lyrics).mp3",
            image: "assets/images/Lemon tree - Fools Garden.jpg"
        },
        {
            name: "Memories",
            singer: "Maroon 5",
            path: "assets/songs/Maroon 5 - Memories - Lyrics.mp3",
            image: "assets/images/Memories - Maroon 5.jpg"
        },
        {
            name: "Monsters",
            singer: "Katie Sky",
            path: "assets/songs/Monsters - Katie Sky (Lyrics + Vietsub) .mp3",
            image: "assets/images/Monsters - Katie Sky.jpg"
        },
        {
            name: "Wellerman",
            singer: "Nathan Evans",
            path: "assets/songs/Nathan Evans - Wellerman (Sea Shanty).mp3",
            image: "assets/images/Wellerman - Nathans Evans.jpg"
        },
        {
            name: "Nevada",
            singer: "Vicetone",
            path: "assets/songs/Nevada (Lyrics) - Vicetone feat Cozi Zuehlsdorff.mp3",
            image: "assets/images/Nevada.jpg"
        },
        {
            name: "Reality",
            singer: "Lost Frequencies",
            path: "assets/songs/Reality - Lost Frequencies - Lyrics + Vietsub..mp3",
            image: "assets/images/Reality.jpg"
        },
        {
            name: "Señorita",
            singer: "Shawn Mendes x Camila Cabello",
            path: "assets/songs/Shawn Mendes, Camila Cabello - Señorita (Lyrics) Letra.mp3",
            image: "assets/images/Senorita.png"
        },
        {
            name: "Unstopable",
            singer: "Sia",
            path: "assets/songs/Sia - Unstoppable (Lyrics).mp3",
            image: "assets/images/Unstopable.jpg"
        },
        {
            name: "Monody",
            singer: "Laura Brehm",
            path: "assets/songs/TheFatRat - Monody (Lyrics) feat. Laura Brehm.mp3",
            image: "assets/images/Monody.jpg"
        },
        {
            name: "Dance Monkey",
            singer: "Tones and I",
            path: "assets/songs/Tones and I - Dance Monkey (Lyrics).mp3",
            image: "assets/images/Dance Monkey.jpg"
        },
    ],

    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="thumb" style="background-image: url('${song.image}')"></div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `;
        });
        playlist.innerHTML = htmls.join("");
    },

    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            }
        });
    },

    handleEvents: function () {
        _this = this;
        const cdWidth = cd.offsetWidth;

        // Xử lí CD quay/ dừng
        const cdThumbAnimate = cdThumb.animate([
            { transform: "rotate(360deg)" }
        ], {
            duration: 10000,
            iterations: Infinity,
        });
        cdThumbAnimate.pause();

        // Xử lí phóng to/ thu nhỏ CD
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        };

        // Xử lí click play button
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        // Khi song play
        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add("playing");
            cdThumbAnimate.play();
        };

        // Khi song pause
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove("playing");
            cdThumbAnimate.pause();
        };

        // Khi tiến độ song thay đổi
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercentage = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercentage;
                _this.displayDuration();
                _this.displayCurrentTime();
            }
        };

        // Xử lí tua song
        progress.onchange = function (e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        };

        // Khi click nextBtn
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
            this.style.color = "var(--primary-color)";
            setTimeout(() => { this.style.color = "#666" }, 300);
        };

        // Khi click prevBtn
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
            this.style.color = "var(--primary-color)";
            setTimeout(() => { this.style.color = "#666" }, 300);
        };

        // Khi click randomBtn
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle("active", _this.isRandom);
        };

        // Khi click repeatBtn
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle("active", _this.isRepeat);
        };

        // Xử lí next song khi audio ended
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };

        // Xử lí khi click song
        playlist.onclick = function (e) {
            const songNode = e.target.closest(".song:not(.active)");
            if (songNode || e.target.closest(".option")) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }

                if (e.target.closest(".option")) {

                }
            }
        }
    },

    scrollToActiveSong: function () {
        if (_this.currentIndex > 3) {
            setTimeout(() => {
                $(".song.active").scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }, 300);
        } else {
            setTimeout(() => {
                $(".song.active").scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 300);
        }

    },

    displayDuration: function () {
        let durationMinutes = Math.floor(audio.duration / 60);
        let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
        $(".duration").textContent = durationMinutes + ":" + durationSeconds;
    },

    displayCurrentTime: function () {
        let currentMinutes = Math.floor(audio.currentTime / 60);
        let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        $(".current-time").textContent = currentMinutes + ":" + currentSeconds;
    },

    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url("${this.currentSong.image}")`;
        audio.src = this.currentSong.path;
    },

    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    playRandomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (this.currentIndex === newIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    start: function () {
        this.defineProperties();
        this.loadCurrentSong();
        this.handleEvents();
        this.render();
    }
}

app.start();