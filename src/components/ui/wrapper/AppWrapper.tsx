import { ReactNode } from 'react';

type AppWrapperProps = {
    title: string;
    children: ReactNode;
};

const AppWrapper = ({ title, children }: AppWrapperProps) => {
    return;
    <section>
        <h1>{title}</h1>
        {children}
    </section>;
};

export default AppWrapper;
