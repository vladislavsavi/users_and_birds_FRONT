import renderer from "react-test-renderer";
import { SignUpForm } from "../index";

test("comparison of prints SignUpForm", () => {
  const component = renderer.create(<SignUpForm />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
