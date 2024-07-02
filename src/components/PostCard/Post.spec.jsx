import { render, screen } from "@testing-library/react"
import { PostCard } from "."
import { postCardPropsMock } from "./mock";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

const props = postCardPropsMock

describe('<PostCard/>', () =>{
    it ( 'should render PostCard correctly ', () => {
        render(<PostCard {...props}/>);
        expect(screen.getByRole('img', {name: 'title1'})).toBeInTheDocument('src', 'img/img.png');
        expect(screen.getByRole('heading', {name:/title1/i})).toBeInTheDocument();
    });
})