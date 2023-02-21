const ytData = {
    channel : {
        channelPic: 'https://yt3.ggpht.com/09I-3iGSMul_r1dikSY3sZbobXLw8qpGkGgCeicJiZYxc4daaufZb9GkmunrU6Iw6x9NpgudXw=s48-c-k-c0x00ffffff-no-rj',
        channel: 'Developer Pro',
        subscribers: '5.2K subscribers'
    },
    meta : {
        title: 'How to get a remote developer job (2023)',
        likes: 46,
        views: '568 views',
        time: '2.18.2023',
        totalComments: '29 Comments',
        description: {
            tags: ['#softwaredeveloper', '#webdeveloper', '#frontenddeveloper'],
            text: ['⭐Land your first 80k/year remote developer job', '💻Join my free course and start coding']
        }      
    },
    userInput: {
        profilePic: 'https://yt3.ggpht.com/yti/AHXOFjVS0mRIWIR3QbNaQae01xJd08obLuKEDNQ03g=s88-c-k-c0x00ffffff-no-rj-mo',
    },
    comments : [
        {
            user : {
                profilePic: 'https://yt3.ggpht.com/09I-3iGSMul_r1dikSY3sZbobXLw8qpGkGgCeicJiZYxc4daaufZb9GkmunrU6Iw6x9NpgudXw=s48-c-k-c0x00ffffff-no-rj',
                name: 'Developer Pro',
                isPinned: true
               
            },
            stats: {
                thumbsUp: 3,
                thumbsDown: 0,
                time: '2.18.2023',
                heart: false
            },
            comment: {
             
                text: '⭐Land your first 80k/year remote developer job'
            },  
            replies: [
                {
                    user: {
                        profilePic: '',
                        name: '',
                    },
                    comment: ''
                }
            ]
        },
        {
            user : {
                profilePic: 'https://yt3.ggpht.com/ytc/AL5GRJVmlLzVq45PPp_Xo_mOqKoCVbDkVZ7QLXZy82LSBA=s48-c-k-c0x00ffffff-no-rj',
                name: 'Dhivakar Raja',
                isPinned: false
               
            },
            stats: {
                thumbsUp: 0,
                thumbsDown: 0,
                time: '2.14.2023',
                heart: true
            },
            comment: {
             
                text: 'Life lessons! I would say this is not just only for a junior, even its greater advices for an experienced programmer to start on another language/how to improve their career. Love from India'
            },  
            replies: [
                {
                    user: {
                        profilePic: '',
                        name: '',
                    },
                    comment: ''
                }
            ]
        },
        {
            user : {
                profilePic: 'https://yt3.ggpht.com/ytc/AL5GRJUiXgSiBVGAWiXUnrAm_oddVfYJ8I9mCA26IKroAQ=s48-c-k-c0x00ffffff-no-rj',
                name: 'Andrei Gheorghe',
                isPinned: false
               
            },
            stats: {
                thumbsUp: 2,
                thumbsDown: 0,
                time: '2.2.2023',
                heart: true
            },
            comment: {
             
                text: 'Thank you for the guide. Watching your channel gives me REAL HOPE! Who agrees???'
            },  
            replies: [
                {
                    user: {
                        profilePic: '',
                        name: '',
                    },
                    comment: ''
                }
            ]
        },
        {
            user : {
                profilePic: 'https://yt3.ggpht.com/ytc/AL5GRJXdUFZroDfI3GXqIi9Lqk3gdt3XqsbGiSXOsQ=s48-c-k-c0x00ffffff-no-rj',
                name: 'The Realest Ever',
                isPinned: false
               
            },
            stats: {
                thumbsUp: 0,
                thumbsDown: 0,
                time: '2.1.2023',
                heart: true
            },
            comment: {
             
                text: 'Hey Cristian, can you make a video on what the kind of tasks are that get assigned to a junior front end dev? Like specifically what are we going to be doing? And also can you explain the workflow, like are we going to be pushing code to GitHub? Thanks and much appreciated!'
            },  
            replies: [
                {
                    user: {
                        profilePic: 'https://yt3.ggpht.com/09I-3iGSMul_r1dikSY3sZbobXLw8qpGkGgCeicJiZYxc4daaufZb9GkmunrU6Iw6x9NpgudXw=s48-c-k-c0x00ffffff-no-rj',
                        name: 'Developer Pro',
                    },
                    comment: `it's pretty difficult to explain because it's so simple in theory and a video wouldn't do it justice. you need to truly experience it to really understand it.
                    It took my guys in the program 1 month and half to get a good feel for it... so it's one of those things where real life beats theory XD`
                }
            ]
        },

    ]
}

const description = document.getElementById('video-description');
const channel = document.getElementById('channel-info');
const comment = document.getElementById('comment-post');
const input = document.getElementById('comment-input');

function numberOfDays(posted) {
    const toDay = new Date();
    const postDay = new Date(posted);
    const aDay = 1000 * 60 * 60 * 24;
    const timeDiff = toDay.getTime() - postDay.getTime();
    const dayDiff = Math.round(timeDiff / aDay);

    // console.log(toDay.getTime());
    // console.log(postDay.getTime());
    // console.log(timeDiff);
    // console.log(dayDiff);

    return dayDiff + ' days';
}
// numberOfDays('2.18.2023');

channel.innerHTML += `
<h2 class="video-info__title">${ytData.meta.title}</h2>
<div class="video-info__container flex">
    <div class="video-info-left flex">
        <div class="video-info__img-container flex">
            <img class="profile-pic" src="${ytData.channel.channelPic}" alt="channel-pic">
        </div>
        <div class="video-info__channel">
            <h3>${ytData.channel.channel}</h3>
            <p>${ytData.channel.subscribers}</p>
        </div>
        <button class="video-info__subscribed oval-btn">
            <i class="fa-regular fa-bell"></i>
            Subscribed
            <i class="fa-solid fa-chevron-down"></i>
        </button>
    </div>
    <div class="video-info-right flex">
        <button class="video-info-right__likes oval-btn flex">
            <div class="video-info-right__thumbs-up thumbs-up">
                <i class="fa-regular fa-thumbs-up"></i>
                <span>${ytData.meta.likes}</span>
            </div>
            <i class="fa-regular fa-thumbs-down"></i>
        </button>
        <button class="oval-btn">
            <i class="fa-regular fa-share-from-square"></i>
            Share
        </button>
        <button class="oval-btn">
            <i class="fa-solid fa-arrow-down"></i>
            Download
        </button>
        <button class="oval-btn">
            <i class="fa-solid fa-ellipsis"></i>
        </button>
    </div>
</div>
`;

description.innerHTML += `
<div class="description__container">
    <div class="flex">
        <h4>${ytData.meta.views}</h4>
        <h4>${numberOfDays(ytData.meta.time)}</h4>
        <h4>${ytData.meta.description.tags.join(' ')}</h4>
    </div>
    <p>
        ${ytData.meta.description.text[0]}
    </p>
    <p>
        ${ytData.meta.description.text[1]}
    </p>
    <button class="remove-background-border">Show more</button>
</div>
<div class="description__comment-info flex">
    <h3>${ytData.meta.totalComments}</h3>
    <button class="remove-background-border">
        <i class="fa-solid fa-arrow-up-wide-short"></i>
        Stort by
    </button>
</div>
`
input.innerHTML += `
<div class="flex">
    <img class="profile-pic" src="${ytData.userInput.profilePic}" alt="profile-pic">
    <input class="remove-background-border" type="text" placeholder="Add a comment...">
</div>
`

ytData.comments.forEach(obj => {
    comment.innerHTML += `
    <div class="comment-display__post-container flex">
        <img class="profile-pic" src="${obj.user.profilePic}" alt="channel-pic">
        <div class="comment-display__right-column">
            <div class="comment-display__pinned flex">
                ${ obj.user.isPinned == true ? `
                <i class="fa-solid fa-thumbtack"></i>
                <h5>Pinned by Developer Pro</h5>` : '' }                
            </div>
            <div class="comment-display__post-header flex">
                ${ ytData.channel.channel == obj.user.name ? `
                <h4 class="oval-btn">${obj.user.name}</h4>` : 
                `<h4 class="remove-comment-style">${obj.user.name}</h4>` }
                <h5>${numberOfDays(obj.stats.time)}</h5>
            </div>
            <p class="comment-display__post-body">
                ${obj.comment.text}
            </p>
            <div class="comment-display__post-footer flex">
                <button class="comment-display__likes oval-btn flex remove-background-border">
                    <div class="comment-display__thumbs-up thumbs-up">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <span>${obj.stats.thumbsUp}</span>
                    </div>
                    <i class="fa-regular fa-thumbs-down"></i>
                </button>

                ${ obj.stats.heart ? `<i class="fa-solid fa-heart"></i>` : '' }
                <button class="comment-display__to-reply-btn remove-background-border">Reply</button>
            </div>
            <div class="comment-display__see-response flex">
                ${ obj.replies[0].comment != '' ? `
                <button class="remove-background-border">
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <img class="profile-pic" src="${obj.replies[0].user.profilePic}" alt="channel-pic">
                <button class="remove-background-border">Reply</button>` : '' }
            </div>
        </div>
    </div>
    `
});
    