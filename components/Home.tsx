"use client";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timeline } from "@/components/timeline";
import { SkillCategory } from "@/components/skill-category";
import { ProjectCard } from "@/components/project-card";

export default function Hero() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 px-4 pt-2 dark:shadow-2xl border dark:border-gray-800 transition-all duration-500">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-stretch gap-1.5 sm:gap-3 mt-5 max-w-full sm:pb-1 z-10">
          <div className="relative w-24 sm:w-36 aspect-square flex-shrink-0">
            <Image
              src="/images/photo.jpg"
              alt="My Picture"
              className="w-full h-auto object-cover rounded-xl transition-opacity duration-400"
              fill
            />
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
            <div className="flex items-start justify-between relative">
              <h1 className="text-[25px] xs:text-3xl sm:text-5xl font-extrabold leading-tight truncate max-w-full text-wrap min-w-0 dark:text-white transition-colors duration-500 font-sans lg:pb-2">
                Justine Nicolao
              </h1>
              <div className="flex items-center gap-2">
                <ThemeToggle />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-1">
              <div className="flex flex-wrap items-center pl-0.5">
                <span className="text-sm sm:text-xl text-indigo-700 dark:text-indigo-400 pb-0.5 font-bold transition-colors duration-300">
                  Software Engineer
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                📍 Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="backdrop-blur-xl bg-white/40 dark:bg-slate-800/30 rounded-2xl p-5 transition-all duration-300 border border-white/40 dark:border-slate-700/40 shadow-lg hover:shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent dark:from-slate-700/30 dark:to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200/20 via-sky-200/20 to-indigo-200/20 dark:from-indigo-800/20 dark:via-sky-800/20 dark:to-indigo-800/20 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors duration-500 font-sans">
                  About
                </h3>
                <p className="font-normal text-gray-700 dark:text-gray-200 text-sm md:text-base leading-relaxed transition-colors duration-500 font-sans">
                  I&apos;m a software Engineer with 3 years of experience
                  building reliable, maintainable applications. I enjoy solving
                  real problems with clean code, and I&apos;m always learning
                  new tools and practices to get better at what I do. I care
                  about writing code that not only works well but also makes a
                  real difference for the people using it.
                </p>
              </div>
            </div>
            <div className="backdrop-blur-xl bg-white/40 dark:bg-slate-800/30 rounded-2xl p-5 transition-all duration-300 border border-white/40 dark:border-slate-700/40 shadow-lg hover:shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent dark:from-slate-700/30 dark:to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200/20 via-sky-200/20 to-indigo-200/20 dark:from-indigo-800/20 dark:via-sky-800/20 dark:to-indigo-800/20 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-black dark:text-white mb-4 transition-colors duration-500 font-sans">
                  Connect
                </h3>
                <div className="grid grid-cols-2 gap-3 pl-2">
                  <a
                    href="mailto:bororio96@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#4caf50"
                        d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                      ></path>
                      <path
                        fill="#1e88e5"
                        d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                      ></path>
                      <polygon
                        fill="#e53935"
                        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                      ></polygon>
                      <path
                        fill="#c62828"
                        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                      ></path>
                      <path
                        fill="#fbc02d"
                        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                      ></path>
                    </svg>
                    <span>Gmail</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jnicolao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 72 72"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          fill="#0A66C2"
                          d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                        />
                      </g>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/JNicolao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 98 96"
                    >
                      <path
                        fill="#24292f"
                        fillRule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#24292f"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        className="dark:fill-white"
                      />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://x.com/jnicolao5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 1200 1227"
                    >
                      <path
                        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                        fill="#000000"
                        className="dark:fill-white"
                      />
                    </svg>
                    <span>X (Twitter)</span>
                  </a>
                  <a
                    href="https://www.instagram.com/_jouvert/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 256 256"
                    >
                      <defs>
                        <radialGradient id="instagram-a" cx="0" cy="1" r="1">
                          <stop offset="0" stopColor="#FD5" />
                          <stop offset="0.1" stopColor="#FD5" />
                          <stop offset="0.5" stopColor="#FF543E" />
                          <stop offset="1" stopColor="#C837AB" />
                        </radialGradient>
                        <radialGradient id="instagram-b" cx="0.4" cy="1" r="1">
                          <stop offset="0.1" stopColor="#3771C8" />
                          <stop
                            offset="0.9"
                            stopColor="#6600FF"
                            stopOpacity="0"
                          />
                        </radialGradient>
                      </defs>
                      <path
                        fill="url(#instagram-a)"
                        d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27c-36.302 0-65.73 29.43-65.73 65.73 0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"
                      />
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/justine.nicolao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 112.196 112.196"
                    >
                      <circle
                        fill="#3B5998"
                        cx="56.098"
                        cy="56.098"
                        r="56.098"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34 c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"
                      />
                    </svg>
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://www.tiktok.com/@__jouvert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_tiktok)">
                        <path
                          d="M12.5268 0.00603112C13.5699 0 14.6095 0.00603112 15.6525 0C15.7401 1.29444 16.1823 2.60693 17.0169 3.56167C17.8515 4.53452 19.0743 5.0708 20.3377 5.34101V8.94482C19.1454 8.87463 17.9496 8.58631 16.8777 8.03191C16.4321 7.80964 16.0239 7.53943 15.6157 7.26923C15.6091 9.45181 15.6223 11.6344 15.6025 13.8169C15.5563 14.9482 15.2355 16.0795 14.6491 17.0644C13.6523 18.7328 11.8638 19.9244 9.93467 20C8.67819 20.0301 7.42171 19.7599 6.32514 19.2055C4.36598 18.1646 2.97551 16.1346 2.66139 13.9822C2.62783 13.7298 2.60092 13.4775 2.60092 13.2251C2.56071 11.6043 3.12712 9.97779 4.16065 8.74433C5.4439 7.15967 7.44327 6.18682 9.49571 6.22494C9.50906 7.47651 9.48215 8.72205 9.48215 9.97362C8.69428 9.77946 7.83541 9.89772 7.14082 10.3215C6.65509 10.6037 6.25304 11.0179 5.98569 11.5121C5.53338 12.2417 5.43961 13.1543 5.65026 13.9822C5.98569 15.2758 7.12747 16.3469 8.45704 16.5712C9.33926 16.7232 10.2751 16.5411 11.0361 16.0769C11.6493 15.7043 12.1351 15.1198 12.4035 14.4505C12.5369 14.1078 12.6105 13.7419 12.6172 13.376C12.6574 11.2536 12.6306 9.13759 12.6372 7.01553C12.6372 4.67089 12.6239 2.33229 12.6507 0H12.5268V0.00603112Z"
                          fill="#FF004F"
                        />
                        <path
                          d="M12.5268 0.00603112C12.5 2.33229 12.5134 4.67089 12.5134 7.01553C12.5067 9.13759 12.5335 11.2536 12.4934 13.376C12.4867 13.7419 12.413 14.1078 12.2797 14.4505C12.0112 15.1198 11.5254 15.7043 10.9123 16.0769C10.1513 16.5411 9.21541 16.7232 8.33319 16.5712C7.00362 16.3469 5.86184 15.2758 5.52642 13.9822C5.31576 13.1543 5.40953 12.2417 5.86184 11.5121C6.12919 11.0179 6.53124 10.6037 7.01697 10.3215C7.71156 9.89772 8.57043 9.77946 9.3583 9.97362C9.3583 8.72205 9.38521 7.47651 9.37186 6.22494C7.31942 6.18682 5.32005 7.15967 4.03681 8.74433C3.00327 9.97779 2.43686 11.6043 2.47707 13.2251C2.47707 13.4775 2.50398 13.7298 2.53754 13.9822C2.85166 16.1346 4.24213 18.1646 6.20129 19.2055C7.29786 19.7599 8.55434 20.0301 9.81082 20C11.7399 19.9244 13.5285 18.7328 14.5253 17.0644C15.1117 16.0795 15.4325 14.9482 15.4786 13.8169C15.4985 11.6344 15.4852 9.45181 15.4919 7.26923C15.9 7.53943 16.3083 7.80964 16.7538 8.03191C17.8257 8.58631 19.0215 8.87463 20.2138 8.94482V5.34101C18.9504 5.0708 17.7276 4.53452 16.893 3.56167C16.0584 2.60693 15.6162 1.29444 15.5286 0C14.4856 0.00603112 13.446 0 12.4029 0.00603112H12.5268Z"
                          fill="#000000"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_tiktok">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>TikTok</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@jjouvert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="#FF0000"
                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                      />
                    </svg>
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://www.snapchat.com/add/j_jouvert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12.031 2c.502.005 2.033.036 3.022.671a3.683 3.683 0 0 1 1.318 1.745c.22.552.328 1.368.328 2.433 0 .359-.032.717-.09 1.062a.238.238 0 0 0 .051.201.245.245 0 0 0 .19.08c.14.01.31.01.5.01.384 0 .866-.03 1.433-.089a.72.72 0 0 1 .611.267.715.715 0 0 1 .127.647c-.176.56-.76.975-1.854 1.214a.262.262 0 0 0-.209.31c.023.107.102.4.19.646.157.441.352.88.582 1.31.384.716.81 1.331 1.265 1.827a.25.25 0 0 0 .267.075.25.25 0 0 0 .176-.205c.059-.442.257-.647.435-.768.159-.107.346-.176.557-.207a.72.72 0 0 1 .612.174.715.715 0 0 1 .256.583c-.005.37-.225.719-.614.976-.083.055-.176.107-.28.16-.39.197-1.037.527-2.113.527-.517 0-1.018-.08-1.498-.24a4.96 4.96 0 0 1-.618-.267 9.294 9.294 0 0 1-1.745.646c-.877.227-1.76.341-2.622.341-.862 0-1.745-.114-2.622-.341a9.274 9.274 0 0 1-1.745-.646 4.98 4.98 0 0 1-.618.267c-.48.16-.981.24-1.498.24-1.076 0-1.723-.33-2.113-.527-.104-.053-.197-.105-.28-.16-.389-.257-.609-.606-.614-.976a.715.715 0 0 1 .256-.583.72.72 0 0 1 .612-.174c.211.031.398.1.557.207.178.121.376.326.435.768a.25.25 0 0 0 .176.205.25.25 0 0 0 .267-.075c.455-.496.88-1.111 1.265-1.827.23-.43.425-.869.582-1.31.088-.246.167-.539.19-.646a.262.262 0 0 0-.209-.31c-1.094-.239-1.678-.654-1.854-1.214a.715.715 0 0 1 .127-.647.72.72 0 0 1 .611-.267c.567.059 1.049.089 1.433.089.19 0 .36 0 .5-.01a.245.245 0 0 0 .19-.08.238.238 0 0 0 .051-.201 6.522 6.522 0 0 1-.09-1.062c0-1.065.108-1.881.328-2.433a3.683 3.683 0 0 1 1.318-1.745C9.998 2.036 11.529 2.005 12.03 2z"
                        fill="#FFFC00"
                      />
                    </svg>
                    <span>Snapchat</span>
                  </a>
                  <a
                    href="https://www.pinterest.com/bororio96/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-fit transition transform duration-500 hover:scale-105 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-sans"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="#BD081C"
                        d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69.3 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                      />
                    </svg>
                    <span>Pinterest</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-4 mb-6">
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-6 backdrop-blur-2xl bg-white/50 dark:bg-slate-800/40 rounded-full border border-white/50 dark:border-slate-700/50 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-transparent dark:from-slate-700/40 dark:to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200/30 via-sky-200/30 to-indigo-200/30 dark:from-indigo-800/30 dark:via-sky-800/30 dark:to-indigo-800/30 rounded-full blur-md opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
              <TabsTrigger
                value="skills"
                className="font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-sans"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-sans"
              >
                Experience
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="experience"
              className="animate-in fade-in-50 duration-500"
            >
              <Timeline
                items={[
                  {
                    title: "Software Engineer",
                    company: "Pickspot Network",
                    period: "Jun 2024 - Present",
                    description: [
                      "Developing and deploying scalable web applications by implemented new features and functionalities using technologies including React, Node.js, and MongoDB, improving platform performance by 85%.",
                      "Collaborating with cross-functional teams to design and launch the new product along with a host of many features, contributing to a significant revenue boost and customer satisfaction.",
                      "Integrating third-party APIs and services thereby expanding our platform's capabilities and offering more value to users.",
                    ],
                  },
                  {
                    title: "Junior Software Engineer",
                    company: "eWAKA Mobility",
                    period: "Apr 2024 - Jun 2024",
                    description: [
                      "Designed and deployed a robust battery inventory management system, enabling administrators to electronically control battery swaps and monitor locations in real-time across multiple franchises.",
                      "Collaborated with cross-functional teams to ensure seamless integration of the new system with existing processes such as fleet management.",
                      "Developed a centralized platform that streamlined inventory control, reducing tracking errors by 35% and enhancing operational efficiency, resulting in significant cost savings and improved operational agility for the company.",
                    ],
                  },
                  {
                    title: "Fullstack Developer",
                    company: "Prasins Energy Limited",
                    period: "Jan 2024 - Mar 2024",
                    description: [
                      "Identified inefficiencies in the production process, implemented a streamlined workflow, resulting in a 18% reduction in production time.",
                      "Website development using JavaScript and related technologies (React and Next.js) gaining hands-on experience in building web applications.",
                      "Optimized website content, leading to a 25% increase in organic search traffic and a 15% improvement in conversion rates.",
                    ],
                  },
                ]}
              />
            </TabsContent>

            <TabsContent
              value="skills"
              className="animate-in fade-in-50 duration-500"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <SkillCategory
                  title="Frontend Development"
                  skills={[
                    {
                      name: "React",
                      subskills: [
                        "React 16+",
                        "Hooks",
                        "Context API",
                        "Next.js",
                        "TypeScript",
                        "TailwindCSS",
                        "Styled Components",
                        "Formik",
                        "TDD",
                        "PWA",
                      ],
                    },
                    {
                      name: "JavaScript",
                      subskills: [
                        "ES6+",
                        "DOM Manipulation",
                        "Async/Await",
                        "Fetch API",
                        "NPM",
                        "Webpack",
                        "Babel",
                      ],
                    },
                    {
                      name: "HTML/CSS",
                      subskills: [
                        "Semantic HTML",
                        "CSS3",
                        "Flexbox",
                        "Grid",
                        "Responsive Design",
                        "SASS/SCSS",
                        "CSS Modules",
                      ],
                    },
                    {
                      name: "Design",
                      subskills: [
                        "Figma",
                        "Webflow",
                        "Adobe XD",
                        "UI/UX Design",
                        "Prototyping",
                        "Wireframing",
                        "Design Systems",
                      ],
                    },
                  ]}
                />

                <SkillCategory
                  title="Backend Development"
                  skills={[
                    {
                      name: "Node.js",
                      subskills: [
                        "Express",
                        "REST APIs",
                        "JWT",
                        "Authentication",
                        "Middleware",
                        "MongoDB Integration",
                      ],
                    },
                    {
                      name: "Python",
                      subskills: [
                        "Django",
                        "Flask",
                        "Data Analysis",
                        "Scripting",
                        "Automation",
                      ],
                    },
                    {
                      name: "C",
                      subskills: [
                        "Embedded Systems",
                        "System Programming",
                        "Memory Management",
                        "Data Structures",
                        "Algorithms",
                      ],
                    },
                    {
                      name: "Databases",
                      subskills: [
                        "MongoDB",
                        "MySQL",
                        "PostgreSQL",
                        "Redis",
                        "Mongoose",
                        "Sequelize",
                        "Database Design",
                      ],
                    },
                  ]}
                />

                <SkillCategory
                  title="Tools & Platforms"
                  skills={[
                    {
                      name: "Version Control",
                      subskills: [
                        "Git",
                        "GitHub",
                        "GitLab",
                        "Branching Strategies",
                        "Pull Requests",
                        "Code Reviews",
                      ],
                    },
                    {
                      name: "DevOps",
                      subskills: [
                        "Docker",
                        "CI/CD",
                        "GitHub Actions",
                        "Vercel",
                        "Netlify",
                        "AWS",
                      ],
                    },
                  ]}
                />

                <SkillCategory
                  title="Professional Skills"
                  skills={[
                    {
                      name: "Development Practices",
                      subskills: [
                        "Agile Methodology",
                        "Scrum",
                        "Test-Driven Development",
                        "Code Reviews",
                        "Documentation",
                      ],
                    },
                    {
                      name: "Soft Skills",
                      subskills: [
                        "Team Collaboration",
                        "Problem Solving",
                        "Communication",
                        "Time Management",
                        "Mentoring",
                      ],
                    },
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section id="projects" className="py-4 mb-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-indigo-500"></span>
              <span className="text-sm font-medium tracking-wide text-indigo-700 dark:text-indigo-400 uppercase font-sans">
                Portfolio
              </span>
            </div>
            <h2 className="text-[36px] font-semibold tracking-tight mb-2 leading-[1.15] dark:text-white font-sans">
              Featured Projects
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <ProjectCard
              title="Water Resource Solution"
              description="Water Resource Management is about using science, data, and policy to make sure everyone has enough safe, clean water — now and in the future. With AI and real-time monitoring, we can manage this precious resource smarter and more sustainably."
              tags={["React", "Node.js", "Vite", "PostgreSQL"]}
              image="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              githubUrl="https://github.com/JNicolao/water-AI"
              liveUrl="https://water-ai.jnicolao.com/"
            />

            <ProjectCard
              title="Murmur"
              description="Speak freely, and let AI not just listen, but understand. With real-time voice-to-chat interaction and emotional awareness, Murmur is a voice-first journal, confidant, and companion that helps you track, explore, and heal your inner world."
              tags={["Express", "OpenAI", "Next.js", "Supabase"]}
              image="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <ProjectCard
              title="AI-Powered Task Manager"
              description="A full-stack task management application that leverages artificial intelligence to analyze your productivity patterns and provide actionable insights for workflow optimization."
              tags={["Vite", "TypeScript", "TensorFlow.js", "Tailwind CSS"]}
              image="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              githubUrl="https://github.com/JNicolao/task-manager"
              liveUrl="https://task-manager-neon-kappa.vercel.app/"
            />
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/30 via-sky-200/30 to-indigo-200/30 dark:from-indigo-800/30 dark:via-sky-800/30 dark:to-indigo-800/30 rounded-full blur-md opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
              <Button
                variant="outline"
                className="backdrop-blur-xl bg-white/40 dark:bg-slate-800/30 border border-white/40 dark:border-slate-700/40 text-indigo-800 dark:text-indigo-300 hover:bg-white/50 dark:hover:bg-slate-800/40 px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:translate-y-[-2px] gap-2 font-sans relative z-10 shadow-lg hover:shadow-xl"
                asChild
              >
                <a
                  href="https://github.com/JNicolao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Projects
                  <ChevronRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="mt-12 mb-6">
          <p className="text-center text-sm text-gray-800 dark:text-gray-300 transition-colors duration-300">
            &copy; {new Date().getFullYear()} • Justine Nicolao • All Rights
            Reserved
          </p>
        </div>
      </div>
    </main>
  );
}
