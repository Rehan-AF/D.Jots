const posts = [
    {
        id: 1,
        title: 'Upload Your Notes',
        href: '#',
        description:
            'Safeguard your notes with blockchain technology. Upload and secure your valuable content with ease using D.Jots.',
        // imageUrl:
        //     'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        image :noteimage,
        buttonText: "Upload"

    },
    {
        id: 2,
        title: 'Upload Your Predictions',
        href: '#',
        description:
            'Ensure the immutability of your predictions by uploading them to the blockchain through D.Jots. Secure your foresights with the power of decentralized technology',
            image :Prediction,
        buttonText: "Upload"

    },
    {
        id: 2,
        title: 'Upload Your Articles',
        href: '#',
        description:
            'Secure your articles using the blockchain through D.Jots. Preserve your written work with unmatched data integrity and permanence.',
        image : articles,
        buttonText: "Upload"

    },
    {
        id: 2,
        title: 'Upload your Research',
        href: '#',
        description:
            'Preserve your research securely on the blockchain with D.Jots. Safeguard your findings with the resilience of decentralized technology',
            image : research,
        buttonText: "Upload"

    },
    {
        id: 2,
        title: 'Features to be added .....',
        href: '#',
        description:
            'stay connected.....',
            image : soon ,
        buttonText: "stay connected for comming futures"

    },
    // More posts...
]
import noteimage from "../assets/notes.jpg"
import articles from "../assets/articles.jpg"
import Prediction from "../assets/predictions1.jpg"
import soon from "../assets/soon.jpg"
import research from "../assets/research.jpg"
export default function Services() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services We provide </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                    Easily upload and preserve your predictions, articles, notes, and research on the blockchain for lasting data security. 
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <img
                                    src={post.image}
                                    alt=""
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">

                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                               

                            </div>
                         <button className="bg-blue-500 px-4 py-3 w-full text-xl rounded text-white">{post.buttonText}</button>
                         
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
