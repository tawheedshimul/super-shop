import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function File() {
    const [files, setFiles] = useState([]);
    const [currentFileIndex, setCurrentFileIndex] = useState(0);

    useEffect(() => {
        fetch('file.json')
            .then(res => res.json())
            .then(data => setFiles(data));
    }, []);

    const nextFile = () => {
        setCurrentFileIndex((currentFileIndex + 1) % files.length);
    };

    const prevFile = () => {
        setCurrentFileIndex((currentFileIndex - 1 + files.length) % files.length);
    };

    return (
        <div className="md:w-1/3 flex flex-col items-center space-y-3 mt-28 mx-auto">
            <div className='flex justify-center'>
                <button
                    className="w-8 mt-1 h-8 text-white bg-cyan-500 rounded-full hover:bg-cyan-700 transition duration-300 transform  mr-5"
                    onClick={prevFile}
                >
                    &lt;
                </button>
                <div className="flex justify-center">
                    {files.map((file, index) => (
                        <Link
                            key={index}
                            alt={file.name}
                            className={`rounded bg-gray-400 p-2 mx-3 cursor-pointer transition duration-300 transform ${index === currentFileIndex ? 'scale-105' : ''
                                }`}
                            onClick={() => setCurrentFileIndex(index)}
                            to={`/file/${file.id}`}>{file.name}
                        </Link>
                    ))}
                </div>
                <button
                    className="w-8 mt-1 h-8 text-white bg-cyan-500 rounded-full hover:bg-cyan-700 transition duration-300 transform "
                    onClick={nextFile}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default File;
