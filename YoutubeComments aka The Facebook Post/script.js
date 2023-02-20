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
        time: '1 day ago',
        totalComments: '29 Comments',
        description: {
            tags: ['#softwaredeveloper', '#webdeveloper', 'frontenddeveloper'],
            text: ['Land your first 80k/year remote developer job', 'Join my free course and start coding']
        }      
    },
    userInput: {
        profilePic: 'https://yt3.ggpht.com/yti/AHXOFjVS0mRIWIR3QbNaQae01xJd08obLuKEDNQ03g=s88-c-k-c0x00ffffff-no-rj-mo',
    },
    post : [
        {
            user : {
                profilePic: 'https://yt3.ggpht.com/09I-3iGSMul_r1dikSY3sZbobXLw8qpGkGgCeicJiZYxc4daaufZb9GkmunrU6Iw6x9NpgudXw=s48-c-k-c0x00ffffff-no-rj',
                name: 'Developer Pro',
                pinPost: {
                    icon: 'fa-solid fa-thumbtack',
                    class: 'oval-btn',
                    text: 'Pinned by Developer Pro'
                }
               
            },
            stats: {
                thumbsUp: 3,
                thumbsDown: 0,
                time: '1 day ago',
            },
            comment: {
                icon: 'fa-solid fa-star',
                text: 'Land your first 80k/year remote developer job'
            },  
            replies: [
                {
                    user: {
                        icon: '',
                        profilePic: '',
                        name: '',
                        reply: '',
                        comment: ''
                    }
                }
            ]
        },
        {
            user : {
                profilePic: 'https://yt3.ggpht.com/ytc/AL5GRJVmlLzVq45PPp_Xo_mOqKoCVbDkVZ7QLXZy82LSBA=s48-c-k-c0x00ffffff-no-rj',
                name: 'Dhivakar Raja',
                pinPost: {
                    icon: '',
                    class: 'remove-comment-style',
                    text: ''
                }
            },
            
            stats: {
                thumbsUp: 0,
                thumbsDown: 0,
                time: '4 day ago'
            },
            comment: {
                icon: '',
                text: 'Life lessons! I would say this is not just only for a junior, even its greater advices for an experienced programmer to start on another language/how to improve their career. Love from India'
            },
            replies: [
                {
                    user: {
                        icon: '',
                        profilePic: '',
                        name: '',
                        reply: '',
                        comment: ''
                    }
                }
            ]
        },
        {
            user : {
                profilePic: 'https://yt3.ggpht.com/ytc/AL5GRJUiXgSiBVGAWiXUnrAm_oddVfYJ8I9mCA26IKroAQ=s48-c-k-c0x00ffffff-no-rj',
                name: 'Andrei Gheorghe',
                pinPost: {
                    icon: '',
                    class: 'remove-comment-style',
                    text: ''
                }
            },
            stats : {
                thumbsUp: 2,
                thumbsDown: 0,
                time: '3 day ago'
            },
            comment: {
                icon: '',
                text: 'Thank you for the guide. Watching your channel gives me REAL HOPE! Who agrees???'
            },
            replies: [
                {
                    user: {
                        icon: '',
                        profilePic: '',
                        name: '',
                        reply: '',
                        comment: ''
                    }
                }
            ]
        },
        {
            user : {
                profilePic: 'https://yt3.ggpht.com/ytc/AL5GRJXdUFZroDfI3GXqIi9Lqk3gdt3XqsbGiSXOsQ=s48-c-k-c0x00ffffff-no-rj',
                name: 'The Realest Ever',
                pinPost: {
                    icon: '',
                    class: 'remove-comment-style',
                    text: ''
                }
            },
            stats: {
                thumbsUp: 0,
                thumbsDown: 0,
                time: '7 day ago'
            },
            comment: {
                icon: '',
                text: 'Hey Cristian, can you make a video on what the kind of tasks are that get assigned to a junior front end dev? Like specifically what are we going to be doing? And also can you explain the workflow, like are we going to be pushing code to GitHub? Thanks and much appreciated!'
            },
            replies: [
                {
                    user: {
                        icon: 'fa-solid fa-chevron-down',
                        profilePic: 'https://yt3.ggpht.com/09I-3iGSMul_r1dikSY3sZbobXLw8qpGkGgCeicJiZYxc4daaufZb9GkmunrU6Iw6x9NpgudXw=s48-c-k-c0x00ffffff-no-rj',
                        name: 'Developer Pro',
                        reply: '1 reply',
                        comment: `it's pretty difficult to explain because it's so simple in theory and a video wouldn't do it justice. you need to truly experience it to really understand it.
                        It took my guys in the program 1 month and half to get a good feel for it... so it's one of those things where real life beats theory XD`
                    }
                }
            ]
        }
    ]
}

const description = document.getElementById('video-description');
const channel = document.getElementById('channel-info');
const comment = document.getElementById('comment-post');
const input = document.getElementById('comment-input');

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
        <h4>${ytData.meta.time}</h4>
        <h4>${ytData.meta.description.tags}</h4>
    </div>
    <p>
        <i class="fa-solid fa-star"></i>
        ${ytData.meta.description.text[0]}
    </p>
    <p>
        <i class="fa-solid fa-laptop"></i>
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

ytData.post.forEach(obj => {
    comment.innerHTML += `
    <div class="comment-display__post-container flex">
        <img class="profile-pic" src="${obj.user.profilePic}" alt="channel-pic">
        <div class="comment-display__right-column">
            <div class="comment-display__pinned flex">
                <i class="${obj.user.pinPost.icon}"></i>
                <h5>${obj.user.pinPost.text}</h5>
            </div>
            <div class="comment-display__post-header flex">
                <h4 class="${obj.user.pinPost.class}">${obj.user.name}</h4>
                <h5>${obj.stats.time}</h5>
            </div>
            <p class="comment-display__post-body">
                <i class="${obj.comment.icon}"></i>
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
                <i class="fa-solid fa-heart"></i>
                <button class="comment-display__to-reply-btn remove-background-border">Reply</button>
            </div>
            <div class="comment-display__see-response flex">
                <button class="remove-background-border">
                    <i class="${obj.replies[0].user.icon}"></i>
                </button>
                <img class="profile-pic" src="${obj.replies[0].user.profilePic}" alt="channel-pic">
                <button class="remove-background-border">${obj.replies[0].user.reply}</button>
            </div>
        </div>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    `
});
    