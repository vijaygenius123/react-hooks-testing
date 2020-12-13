import {mount} from 'enzyme';
import Counter from "./Counter";

describe("Counter", () => {
    let onCountChange = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Counter onCountChange={onCountChange}/>);
    })
    it('renders correctly', () => {
        expect(wrapper).not.toBeNull();
    })
})
