const att = document.getElementById('attendee-wrapper');
const chat = document.getElementById('chat');
const attendee_json = [{
    "id": 1,
    "first_name": "Phyllys",
    "last_name": "Skirrow",
    "email": "pskirrow0@hibu.com",
    "gender": "Genderfluid",
    "image": "https://pbs.twimg.com/profile_images/1407017395760287750/GAm9jtP__400x400.jpg",
    "status": "online",
    "location": "Egypt",
    "call_info": "microphone camera info"
}, {
    "id": 2,
    "first_name": "Ashla",
    "last_name": "Bathoe",
    "email": "abathoe1@eventbrite.com",
    "gender": "Agender",
    "image": "https://i.pinimg.com/736x/4d/21/b9/4d21b95b98c980e9a968fd2d656eb9ef.jpg",
    "status": "idle",
    "location": "China",
    "call_info": "microphone-muted camera info"
}, {
    "id": 3,
    "first_name": "Michaeline",
    "last_name": "Marcone",
    "email": "mmarcone2@gravatar.com",
    "gender": "Bigender",
    "image": "null",
    "status": "idle",
    "location": "Czech Republic",
    "call_info": "microphone-muted camera info"
}, {
    "id": 4,
    "first_name": "Alessandro",
    "last_name": "Cowmeadow",
    "email": "acowmeadow3@harvard.edu",
    "gender": "Agender",
    "image": "",
    "status": "idle",
    "location": "Tajikistan",
    "call_info": "microphone-muted camera info"
}, {
    "id": 5,
    "first_name": "Gweneth",
    "last_name": "Aseef",
    "email": "gaseef4@economist.com",
    "gender": "Non-binary",
    "image": "null",
    "status": "idle",
    "location": "China",
    "call_info": "microphone-muted camera info"
}, {
    "id": 6,
    "first_name": "Daron",
    "last_name": "Greenard",
    "email": "dgreenard5@nydailynews.com",
    "gender": "Female",
    "image": "null",
    "status": "idle",
    "location": "China",
    "call_info": "microphone camera info"
}, {
    "id": 7,
    "first_name": "Renee",
    "last_name": "Ellerington",
    "email": "rellerington6@drupal.org",
    "gender": "Male",
    "image": "",
    "status": "online",
    "location": "Ecuador",
    "call_info": "microphone camera-off info"
}, {
    "id": 8,
    "first_name": "La verne",
    "last_name": "Caghan",
    "email": "lcaghan7@tuttocitta.it",
    "gender": "Genderfluid",
    "image": "",
    "status": "idle",
    "location": "China",
    "call_info": "microphone camera info"
}, {
    "id": 9,
    "first_name": "Rosanne",
    "last_name": "Austwick",
    "email": "raustwick8@wix.com",
    "gender": "Genderqueer",
    "image": "null",
    "status": "online",
    "location": "China",
    "call_info": "microphone camera info"
}, {
    "id": 10,
    "first_name": "Ethel",
    "last_name": "Fewlass",
    "email": "efewlass9@parallels.com",
    "gender": "Genderqueer",
    "image": "",
    "status": "idle",
    "location": "Czech Republic",
    "call_info": "microphone-muted camera info"
}, {
    "id": 11,
    "first_name": "Padriac",
    "last_name": "Saines",
    "email": "psainesa@wikimedia.org",
    "gender": "Agender",
    "image": "https://i.pinimg.com/564x/62/93/31/62933145add68185d32ac4a887007779.jpg",
    "status": "idle",
    "location": "Poland",
    "call_info": "microphone-muted camera info"
}, {
    "id": 12,
    "first_name": "Reg",
    "last_name": "Forryan",
    "email": "rforryanb@jiathis.com",
    "gender": "Female",
    "image": "null",
    "status": "online",
    "location": "Portugal",
    "call_info": "microphone camera-off info"
}, {
    "id": 13,
    "first_name": "Danie",
    "last_name": "Domek",
    "email": "ddomekc@mediafire.com",
    "gender": "Female",
    "image": "https://i.pinimg.com/564x/17/c5/25/17c5255543e3e13efd912bc303d8dccd.jpg",
    "status": "idle",
    "location": "Thailand",
    "call_info": "microphone-muted camera info"
}, {
    "id": 14,
    "first_name": "Cello",
    "last_name": "Prator",
    "email": "cpratord@freewebs.com",
    "gender": "Male",
    "image": "https://i.pinimg.com/originals/a7/61/fa/a761fa0c70c4a371ca3838ee00214df2.png",
    "status": "online",
    "location": "Russia",
    "call_info": "microphone-muted camera-off info"
}, {
    "id": 15,
    "first_name": "Markos",
    "last_name": "Marsham",
    "email": "mmarshame@ucoz.ru",
    "gender": "Male",
    "image": "https://i.pinimg.com/originals/a7/61/fa/a761fa0c70c4a371ca3838ee00214df2.png",
    "status": "idle",
    "location": "China",
    "call_info": "microphone camera-off info"
}, {
    "id": 16,
    "first_name": "Pandora",
    "last_name": "Milesap",
    "email": "pmilesapf@joomla.org",
    "gender": "Polygender",
    "image": "null",
    "status": "online",
    "location": "China",
    "call_info": "microphone camera info"
}, {
    "id": 17,
    "first_name": "Gideon",
    "last_name": "Kullmann",
    "email": "gkullmanng@marketwatch.com",
    "gender": "Bigender",
    "image": "null",
    "status": "idle",
    "location": "Ukraine",
    "call_info": "microphone camera-off info"
}, {
    "id": 18,
    "first_name": "Deny",
    "last_name": "Chazelle",
    "email": "dchazelleh@smh.com.au",
    "gender": "Non-binary",
    "image": "null",
    "status": "idle",
    "location": "Russia",
    "call_info": "microphone-muted camera info"
}, {
    "id": 19,
    "first_name": "Blair",
    "last_name": "Doherty",
    "email": "bdohertyi@gov.uk",
    "gender": "Genderqueer",
    "image": "null",
    "status": "online",
    "location": "Indonesia",
    "call_info": "microphone camera-off info"
}, {
    "id": 20,
    "first_name": "Chad",
    "last_name": "Lincke",
    "email": "clinckej@huffingtonpost.com",
    "gender": "Male",
    "image": "https://i.pinimg.com/564x/29/53/71/29537107a7ef85d3c45af38d1208b1ba.jpg",
    "status": "idle",
    "location": "China",
    "call_info": "microphone-muted camera-off info"
}, {
    "id": 21,
    "first_name": "Saunders",
    "last_name": "Colrein",
    "email": "scolreink@booking.com",
    "gender": "Female",
    "image": "null",
    "status": "online",
    "location": "Slovenia",
    "call_info": "microphone-muted camera-off info"
}, {
    "id": 22,
    "first_name": "Rolfe",
    "last_name": "Borgne",
    "email": "rborgnel@liveinternet.ru",
    "gender": "Female",
    "image": "https://pbs.twimg.com/profile_images/1407017395760287750/GAm9jtP__400x400.jpg",
    "status": "online",
    "location": "Philippines",
    "call_info": "microphone camera-off info"
}, {
    "id": 23,
    "first_name": "Bent",
    "last_name": "MacCarrick",
    "email": "bmaccarrickm@soundcloud.com",
    "gender": "Non-binary",
    "image": "null",
    "status": "idle",
    "location": "Brazil",
    "call_info": "microphone camera-off info"
}, {
    "id": 24,
    "first_name": "Maddalena",
    "last_name": "Corbridge",
    "email": "mcorbridgen@un.org",
    "gender": "Polygender",
    "image": "null",
    "status": "online",
    "location": "Poland",
    "call_info": "microphone camera-off info"
}]

const comments = [{
    "id": 1,
    "comment": "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis",
    "user_name": "Codie Elsmore",
    "date": "5:18 PM",
    "image": "null"
}, {
    "id": 2,
    "comment": "non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac",
    "user_name": "Dan Greggor",
    "date": "6:14 AM",
    "image": "null"
}, {
    "id": 3,
    "comment": "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in",
    "user_name": "Bevon Lamprey",
    "date": "3:50 AM",
    "image": "https://i.pinimg.com/564x/64/88/c2/6488c2da37c099017a1f3d8913622c4d.jpg"
}, {
    "id": 4,
    "comment": "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in",
    "user_name": "Raquela Licari",
    "date": "11:58 AM",
    "image": "null"
}, {
    "id": 5,
    "comment": "habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
    "user_name": "Andreas Nathon",
    "date": "6:42 PM",
    "image": "null"
}, {
    "id": 6,
    "comment": "elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat",
    "user_name": "Berk Cattrall",
    "date": "9:04 AM",
    "image": "https://i.pinimg.com/564x/98/7b/4f/987b4f258534b53752f531e631f09fbe.jpg"
}, {
    "id": 7,
    "comment": "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy",
    "user_name": "Gretel Gemmell",
    "date": "5:00 AM",
    "image": "null"
}, {
    "id": 8,
    "comment": "leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis",
    "user_name": "Willard Franzman",
    "date": "8:53 PM",
    "image": "null"
}, {
    "id": 9,
    "comment": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi",
    "user_name": "Enos Dantesia",
    "date": "7:16 AM",
    "image": "https://i.pinimg.com/564x/cd/75/fc/cd75fce98ed7d67df7df7f6c9d24b107.jpg"
}, {
    "id": 10,
    "comment": "vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo",
    "user_name": "Meg Ardern",
    "date": "5:32 AM",
    "image": "https://cdn.myanimelist.net/r/360x360/images/characters/4/274913.jpg?s=a7d0b2d8c7d812c073cf26cc713db24f"
}, {
    "id": 11,
    "comment": "consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi",
    "user_name": "Yulma Gouldstone",
    "date": "5:55 AM",
    "image": "null"
}, {
    "id": 12,
    "comment": "blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit",
    "user_name": "Dawna Zaple",
    "date": "2:19 PM",
    "image": "https://i.pinimg.com/564x/6e/23/77/6e2377c52edcb6e75a21b6270996fec3.jpg"
}, {
    "id": 13,
    "comment": "odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor",
    "user_name": "Kimmi Volkes",
    "date": "9:29 AM",
    "image": "null"
}, {
    "id": 14,
    "comment": "lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non",
    "user_name": "Cammy Schiementz",
    "date": "6:28 AM",
    "image": "https://i.pinimg.com/564x/6e/23/77/6e2377c52edcb6e75a21b6270996fec3.jpg"
}, {
    "id": 15,
    "comment": "tortor quis turpis sed ante vivamus tortor duis mattis egestas",
    "user_name": "Alicia Minnis",
    "date": "4:19 AM",
    "image": "https://i.pinimg.com/564x/98/7b/4f/987b4f258534b53752f531e631f09fbe.jpg"
}, {
    "id": 16,
    "comment": "diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus",
    "user_name": "Michal Jachimak",
    "date": "12:49 AM",
    "image": "https://i.pinimg.com/564x/cd/75/fc/cd75fce98ed7d67df7df7f6c9d24b107.jpg"
}, {
    "id": 17,
    "comment": "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel",
    "user_name": "Isacco Koomar",
    "date": "8:52 PM",
    "image": "https://i.pinimg.com/564x/b3/5e/88/b35e881cb5343fcb5b1f38505f9e715e.jpg"
}, {
    "id": 18,
    "comment": "orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi",
    "user_name": "Hertha Van T'Hoog",
    "date": "12:32 AM",
    "image": "https://i.pinimg.com/564x/64/88/c2/6488c2da37c099017a1f3d8913622c4d.jpg"
}, {
    "id": 19,
    "comment": "auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc",
    "user_name": "Kin Kirkbride",
    "date": "2:39 AM",
    "image": "https://i.pinimg.com/564x/cd/75/fc/cd75fce98ed7d67df7df7f6c9d24b107.jpg"
}, {
    "id": 20,
    "comment": "vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue",
    "user_name": "Pattie Oldford",
    "date": "5:07 PM",
    "image": "https://i.pinimg.com/564x/29/53/71/29537107a7ef85d3c45af38d1208b1ba.jpg"
}]

const getInitials = function (string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

attendee_json.forEach((d) => {
    createGuest(d);
});

comments.sort(function (a, b) {
    return new Date('1970/01/01 ' + a.date) - new Date('1970/01/01 ' + b.date);
}).forEach((c) => {
    createComment(c);
});

const textarea = document.getElementById('chat-textarea');

function createCommentFromText() {
    let comment = textarea.value;

    var pattern = /\B@\w+/g;
    const replacer = `<span class="mention-link">@$1</span>`;
    comment = detectMentionOrHashtag(comment);

    // return;

    if (comment) {
        const body = {
            id: `2394823894728934`,
            user_name: 'Arnie Pennington',
            date: formatAMPM(new Date),
            image: 'null',
            comment
        };

        createComment(body);
        textarea.value = '';
        chat.scrollTop = chat.scrollHeight;

    }
}

function detectMentionOrHashtag(comment) {
    return comment.replace(/([@#])([a-z\d_]+)/ig, function (_, marker, tag) {
        return `<span class="mention-link">${marker}${tag}</span>`;
    });
}

textarea.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        createCommentFromText();
    }
});

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}


function createGuest(obj) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('guest-item-wrapper');

    const container = document.createElement('div');
    container.classList.add('guest-item-container');

    const guest_image = document.createElement('div');
    const guest_image_container = document.createElement('div');
    guest_image.classList.add('guest-item-image');

    guest_image_container.classList.add('guest-item-image-container');

    if (obj.image && obj.image !== 'null' && obj.image !== '') {

        const img = document.createElement('img');
        img.src = obj.image;
        guest_image_container.append(img);
    } else {
        const sp = document.createElement('span');
        sp.innerText = getInitials(`${obj.first_name} ${obj.last_name}`);
        guest_image_container.append(sp);
    }

    guest_image.append(guest_image_container);


    const status_item = document.createElement('div');
    status_item.classList.add('status-item');
    status_item.classList.add(obj.status || 'idle');
    status_item.setAttribute('data-status', obj.status || 'idle');
    guest_image.append(status_item);

    const guest_item_info = document.createElement('div');
    guest_item_info.classList.add('guest-item-info');
    const name_info = document.createElement('a');
    name_info.classList.add('guest-name-info');
    name_info.setAttribute('data-info', 'guest');

    const place_info = document.createElement('a');
    place_info.classList.add('guest-place-info');
    place_info.setAttribute('data-info', 'guest');

    name_info.innerText = `${obj.first_name} ${obj.last_name}`;
    name_info.setAttribute('title', `${obj.first_name} ${obj.last_name}`);
    place_info.innerText = `${obj.location}`;
    guest_item_info.append(name_info);
    guest_item_info.append(place_info);

    const buttons_side = document.createElement('div');
    buttons_side.classList.add('buttons--side');

    obj.call_info.split(' ').forEach((e) => {
        const btn = createGuestButton(e);
        buttons_side.append(btn);
    });

    container.append(guest_image);
    container.append(guest_item_info);
    container.append(buttons_side);
    wrapper.append(container);
    att.append(wrapper);
}

function createGuestButton(name) {
    const button = document.createElement('button');
    button.classList.add('button-header');
    button.classList.add('guest-button');
    button.classList.add(`button-${name}`);
    button.style = '--size: 32px';

    var xmlns = "http://www.w3.org/2000/svg";
    const svgC = document.createElementNS(xmlns, "svg");
    const useSVG = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useSVG.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#${name}`);
    svgC.append(useSVG);
    button.append(svgC);

    return button;
}

function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia);
}

function getVideoCamera() {
    try {
        if (hasGetUserMedia()) {
            const constraints = {
                video: true
            };
    
            const videoCamera = document.querySelector('.video-camera');
            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                const mediaStream = new MediaStream(stream);
                videoCamera.srcObject = mediaStream;
                videoCamera.play();
            })
        } else {
            alert('getUserMedia() is not supported by your browser');
        }
    } catch {
        console.log('spo na len');
    }
}

function emojiOnly(text) {
    const emoji_regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|[\ud83c[\ude50\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return emoji_regex.test(text);
}

function createComment(user) {
    const container = document.createElement('div');
    container.classList.add('message--container');

    const profile_picture = document.createElement('div');
    if (user.image && user.image !== 'null' && user.image !== '') {
        const img = document.createElement('img');
        img.src = user.image;
        profile_picture.append(img);
    } else {
        const sp = document.createElement('span');
        sp.innerText = getInitials(`${user.user_name}`);
        profile_picture.append(sp);
    }

    // profile_picture.innerText = getInitials(user.user_name);
    profile_picture.classList.add('message-profile-picture');

    const information_wrapper = document.createElement('div');
    information_wrapper.classList.add('message-text-information-wrapper');

    const message_text_information = document.createElement('div');
    message_text_information.classList.add('message-text-information');

    const sender_name = document.createElement('div');
    sender_name.classList.add('message-sender-name');

    const sname = document.createElement('span');
    sname.innerText = `${user?.user_name}`;

    const time = document.createElement('small');
    time.classList.add('message--time');
    time.innerText = `${user?.date}`;

    const message_text_wrapper = document.createElement('div');
    message_text_wrapper.classList.add('message--text-wrapper');
    message_text_wrapper.innerHTML = `${user?.comment}`;
    const hmm = emojiOnly(user.comment) ? 'emoji-only' : 'not-emoji';
    message_text_wrapper.classList.add(hmm);

    sender_name.append(sname);
    sender_name.append(time);
    message_text_information.append(sender_name);
    information_wrapper.append(message_text_information);
    information_wrapper.append(message_text_wrapper);

    container.append(profile_picture);
    container.append(information_wrapper);
    chat.append(container);
}



const vid = document.getElementById('video');

function full_screen() {
    vid.requestFullscreen();
}

document.addEventListener('DOMContentLoaded', () => {

    const vid = document.getElementById('video');
    const array_videos = ['video-2', 'video-3', 'video-4', 'video-5'];
    // vid.play();
    vid.addEventListener('ended', () => {
        vid.src = '';
        vid.src = `${array_videos[Math.floor(Math.random() * array_videos.length)]}.mp4`;
        setTimeout(() => {
            vid.play();
        }, 800);
    });

    const ac = document.getElementById('attendee-count');
    const pn = document.getElementById('participants-number');
    ac.innerText = `(${attendee_json?.length})` || '';
    pn.innerText = `(${attendee_json?.length + 1})` || '';


    // const source = 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8';
    const source = 'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8';

    const v_title = document.getElementById('video-information-title');

    const video = document.querySelector('video');
    video.volume = 0;

    const defaultOptions = {
        title: 'Example Title',
        iconPrefix: 'my',
        settings: {
            captions: true,
            quality: true
        }
    };

    if (Hls.isSupported()) {
        var hls = new Hls()
        hls.loadSource(source);
        hls.attachMedia(video);
        window.hls = hls;

        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            const availableQualities = hls.levels.map((l) => l.height)
            availableQualities.unshift(0) //prepend 0 to quality array
            defaultOptions.quality = {
                default: 0, //Default - AUTO
                options: availableQualities,
                forced: true,
                onChange: (e) => updateQuality(e),
            }

            hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {
                window.hls.startLoad();
                var span = document.querySelector(".plyr__menu__container [data-plyr='quality'][value='0'] span")
                if (hls.autoLevelEnabled) {
                    span.innerHTML = `AUTO (${hls.levels[data.level].height}p)`
                } else {
                    span.innerHTML = `AUTO`
                }
            });

            video.play();

        })
    }

    function updateQuality(newQuality) {
        if (newQuality === 0) {
            window.hls.currentLevel = -1; //Enable AUTO quality if option.value = 0
        } else {
            window.hls.levels.forEach((level, levelIndex) => {
                if (level.height === newQuality) {
                    window.hls.currentLevel = levelIndex;
                }
            });
        }
    }

    chat.scrollTop = chat.scrollHeight;
});