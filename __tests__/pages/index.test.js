import { create } from "react-test-renderer";
import HomePage from "../../pages";

describe('INITIAL TEST FILE' , () => {
  it('First test', () => {
    const result = 4;

    expect(2+2).toBe(result);
  });
});

describe('Snapshot <HomePage>', () => {
  it('Should be take a snapshot of HomePage component', () => {
    const  homePage = create(<HomePage />).toJSON();
    expect(homePage).toMatchSnapshot();
  });;
 });
