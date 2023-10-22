type LoadingBarProps = {
    loading: boolean;
    loadingBarFade: boolean;
};

export const LoadingBar = ({ loading, loadingBarFade }: LoadingBarProps) => (
    <div
        className={`relative h-[50px] w-[500px] border-spacing-10 rounded-2xl border-4 border-gray-700 bg-white p-1 transition-all ${
            loadingBarFade
                ? '-translate-y-5 opacity-0'
                : 'translate-y-0 bg-opacity-80'
        }
    ${loading ? 'opacity-100' : 'transparent opacity-0'}`}
    >
        <div className="relative h-full w-full">
            <div
                className={`absolute left-0 z-10 h-full rounded-xl bg-green-500 transition-all duration-700 ${
                    loading ? 'w-full' : 'w-0'
                }`}
            />
        </div>
    </div>
);
