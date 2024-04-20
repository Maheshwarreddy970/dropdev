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

export const Silveraccordion = () => {
    const [activeId, setActiveId] = useState(null);

    const togglerFunction = (index: any) => {
        if (activeId === index) {
            setActiveId(null);
        } else {
            setActiveId(index);
        }
    };

    return (
        <div className=" w-11/12 flex flex-col justify-center">
            {frequentlyAskQuestions.map((item, i) => (
                <div key={i} className=" w-full m-2  bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 rounded-lg shadow-md">
                    <div
                        className={`px-5 w-full py-4 flex justify-center ${activeId === i ? "col-span-2 text-lg font-bold capitalize rounded-md" : ""
                            }`}
                        onClick={() => togglerFunction(i)}
                    >
                        <p className="flex-1">{item.title}</p>

                        <span>
                            {activeId === i ? (
                                <i className="fa-solid fa-angle-up"></i>
                            ) : (
                                <i className="fa-solid fa-angle-down"></i>
                            )}
                        </span>
                        <svg
                            className="fill-black shrink-0 ml-8"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className={`transform origin-center transition duration-200 ease-out ${activeId === i && "!rotate-180"
                                    }`}
                            />
                            <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className={`transform origin-center rotate-90 transition duration-200 ease-out ${activeId === i && "!rotate-180"
                                    }`}
                            />
                        </svg>
                    </div>
                    {activeId === i && (
                        <div className="overflow-hidden transition-all duration-300 ease-in-out px-5 py-4 flex items-center justify-between">
                            <p>{item.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

