import "@styles/globals.css";
import { ReactNode } from "react";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metaData = {
    title: "RanaG",
    description: "Discover and share AI Prompts",
};
const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    );
};

//this commit is to test the git commit fill in past

export default RootLayout;
