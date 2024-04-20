"use client"

import React from "react";
import { useState } from "react";

const frequentlyAskQuestions = [
    {
        title: "What is Lorem Ipsum?",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        title: "Why do we use it? ",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
        title: "Where does it come from?",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
];

export const Smoothaccordion = () => {
    const [activeId, setActiveId] = useState(null);

    const togglerFunction = (index: any) => {
        if (activeId === index) {
            setActiveId(null);
        } else {
            setActiveId(index);
        }
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-[600px] bg-white dark:bg-black h-max border rounded-lg overflow-hidden">
                {frequentlyAskQuestions.map((item, i) => (
                    <div key={i} className="border-b last:border-b-0">
                        <div
                            className={`px-5 py-4 flex items-center justify-between ${activeId === i ? "bg-gray-100 dark:bg-gray-800" : ""
                                }`}
                            onClick={() => togglerFunction(i)}
                        >
                                {activeId === i ? (
                                    <>
                                        <p className="flex-1 text-indigo-600">{item.title}</p>
                                        <svg className='transition duration-500 text-indigo-600 rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                         <p className="flex-1 hover:text-indigo-600 dark:text-white">{item.title}</p>
                                        <svg className='text-gray-900 dark:text-white transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
                                        </svg>
                                    </>
                                )}

                        </div>
                        {activeId === i && (
                            <div className="overflow-hidden transition-all duration-300 ease-in-out px-5 py-4 flex items-center justify-between">
                                <p>{item.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

