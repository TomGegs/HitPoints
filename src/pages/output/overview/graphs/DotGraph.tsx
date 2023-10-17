import { useState } from 'react';

type GraphProps = {
    age: number;
    averageLifeExpectancy: number;
    rows: string;
    cols: string;
    mobileDotSize: string;
    desktopDotSize: string;
};

const DotGraph = ({
    age,
    averageLifeExpectancy,
    rows,
    cols,
    mobileDotSize,
    desktopDotSize,
}: GraphProps) => {
    const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

    return (
        <div
            className={`w-full max-w-[320px] lg:max-w-[1080px] ${rows} grid ${cols} text-black`}
        >
            {[...Array(averageLifeExpectancy)].map((_, i) => (
                <div
                    key={i}
                    className={`relative my-[2px] rounded-full  ${mobileDotSize} ${desktopDotSize} ${
                        i + 1 === age
                            ? 'bg-red-500 hover:bg-red-300'
                            : 'bg-blue-300 hover:bg-gray-200' && i + 1 > age
                            ? 'bg-blue-500 hover:bg-blue-200'
                            : 'bg-gray-800 hover:bg-gray-400'
                    }`}
                    onMouseEnter={() => setHoveredSquare(i)}
                    onMouseLeave={() => setHoveredSquare(null)}
                >
                    {hoveredSquare === i && (
                        <div
                            className={`absolute bottom-6 left-0 z-10 bg-black text-center text-lg font-black ${
                                i + 1 === age
                                    ? 'text-red-500'
                                    : 'text-yellow-400'
                            }`}
                        >
                            {i + 1}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DotGraph;
