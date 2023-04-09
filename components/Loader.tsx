import '../styles/Home.module.css'

type Props = {
  isLoading: boolean;
  onTransitionEnd: VoidFunction;
};

export const Loader = (Props :any) => (
  <div className="progress"></div>
);
