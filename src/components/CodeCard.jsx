import '../css/components/CodeCard.css'
import ReactMarkdown from 'react-markdown';

function CodeCard({ title, content }) {
    return <div className="overcard">
        <div className="code-card">
            <div className="circles">
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
            </div>
            <div className="browser">
                <div className="chevrons">
                    <svg
                        id="_20"
                        data-name="20"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                    >
                        <path
                            id="Fill"
                            d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z"
                            transform="translate(6.25 3.75)"
                        ></path>
                    </svg>
                    <svg
                        id="_20"
                        data-name="20"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                    >
                        <path
                            id="Fill"
                            d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z"
                            transform="translate(6.625 3.75)"
                        ></path>
                    </svg>
                </div>
                <div className="search-bar">
                    <svg
                        viewBox="0 0 16.89 16.887"
                        height="7.887"
                        width="7.89"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            transform="translate(0.003 0)"
                            d="M16.006,16.887h0l-4.743-4.718a6.875,6.875,0,1,1,.906-.906l4.719,4.744-.88.88ZM6.887,1.262a5.625,5.625,0,1,0,5.625,5.625A5.631,5.631,0,0,0,6.887,1.262Z"
                            id="Fill"
                        ></path>
                    </svg>
                    {title}
                </div>
            </div>
        </div>
        <div className="content-card"><ReactMarkdown>{content}</ReactMarkdown></div>
    </div>



}

export default CodeCard