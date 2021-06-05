import renderer from "react-test-renderer";
import { SignInForm } from "../index";

test("comparison of prints SignInForm", () => {
  const component = renderer.create(<SignInForm />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
