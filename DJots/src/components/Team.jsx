
  import alishan from "../assets/Alishan.jpeg"
  import rehan from "../assets/rehan.jpeg"
 import {GithubOutlined} from "@ant-design/icons"
 import wasi from "../assets/wasi.jpeg"
 import aman from "../assets/aman.jpeg"
 import jawad from "../assets/jawad.jpeg"
  
  export default function Team() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              We’re a dynamic group of individuals who are passionate about what we do.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
                <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56 object-cover " src={person.image} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-400">{person.role}</p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-300">
                      <span className="sr-only">GitHub</span>
                      <GithubOutlined style={{ fontSize: '20px' }} />
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  const people = [
    {
      name: 'Ali Shan',
      role: 'Developer',
      image: alishan,
      Github: ' https://github.com/Shan-barcha',
      linkedinUrl: 'https://www.linkedin.com/in/ali-shan-96a49a25a/',
    },
    {
        name: 'Rehan Afzal',
        role: 'Developer',
        image: rehan,
        Github: 'https://github.com/Rehan-AF',
        linkedinUrl: 'https://www.linkedin.com/in/rehan-afzal-55b880255/',
      },
      {
        name: 'Sirshar yairbaig',
        role: 'Developer',
        image: wasi,
        Github: 'https://github.com/wasisirshar',
        linkedinUrl: 'https://www.linkedin.com/in/wasi-sirshar-89b950253/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      },
      {
        name: 'Aman Aly',
        role: 'Designer',
        image: aman,
        Github: 'https://github.com/devamanaly',
        linkedinUrl: 'https://www.linkedin.com/in/aman-aly-1457a8228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Jawad Karim',
        role: 'Developer',
        image: jawad,
          Github: 'https://github.com/jawadkarim96',
        linkedinUrl: 'https://www.linkedin.com/in/jawad-karim-544594263/',
      },
    // More people...
  ]