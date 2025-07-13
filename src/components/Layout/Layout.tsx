interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='grid min-h-dvh grid-rows-[auto_1fr_auto] w-full max-w-dvw'>
            <h1>navBar</h1>
            <main className='max-w-dvw'>{children}</main>
            <h1>footer</h1>
        </div>
    )
}