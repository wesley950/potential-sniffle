const threads = [
    {
        id: Math.floor(Math.random() * 10000),
        title: "Thread 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium in iure adipisci nisi dolor. Ab inventore molestias praesentium quas dignissimos, dolorum itaque eius asperiores, incidunt neque molestiae quae. Nesciunt.",
        likes: Math.floor(Math.random() * 1000),
        comments: [
            {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                likes: Math.floor(Math.random() * 10)
            },
            {
                text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
                likes: Math.floor(Math.random() * 10)
            },
            {
                text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                likes: Math.floor(Math.random() * 10)
            },
            {
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
                likes: Math.floor(Math.random() * 10)
            },
            {
                text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
                likes: Math.floor(Math.random() * 10)
            }
        ]
    },
    {
        id: Math.floor(Math.random() * 10000),
        title: "Thread 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium in iure adipisci nisi dolor. Ab inventore molestias praesentium quas dignissimos, dolorum itaque eius asperiores, incidunt neque molestiae quae. Nesciunt.",
        likes: Math.floor(Math.random() * 1000),
        comments: [
            {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                likes: Math.floor(Math.random() * 10)
            },
            {
                text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
                likes: Math.floor(Math.random() * 10)
            },
            {
                text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                likes: Math.floor(Math.random() * 10)
            },
            {
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
                likes: Math.floor(Math.random() * 10)
            },
            {
                text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
                likes: Math.floor(Math.random() * 10)
            }
        ]
    },
    {
        id: Math.floor(Math.random() * 10000),
        title: "Thread 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium in iure adipisci nisi dolor. Ab inventore molestias praesentium quas dignissimos, dolorum itaque eius asperiores, incidunt neque molestiae quae. Nesciunt.",
        likes: Math.floor(Math.random() * 1000),
        comments: [
            {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                likes: Math.floor(Math.random() * 10)
            },
            {
                text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
                likes: Math.floor(Math.random() * 10)
            },
            {
                text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                likes: Math.floor(Math.random() * 10)
            },
            {
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
                likes: Math.floor(Math.random() * 10)
            },
            {
                text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
                likes: Math.floor(Math.random() * 10)
            }
        ]
    }
];

function FetchThreads() {
    return threads;
}

function FetchThread() {
    return threads[0];
}

export {
    FetchThread,
    FetchThreads
}
