import SearchButton from './SearchButton.js';
import SearchInput from './SearchInput.js';
import {useRef} from "react";

export default function Page() {
    const inputRef = useRef(null);

    return (
        <>
            <nav>
                <SearchButton onClick={() => {
                    inputRef.current.focus();
                }}/>
            </nav>
            <SearchInput ref={inputRef} />
        </>
    );
}


