import Basic from "../../client/layouts/Basic";
import PrimaryLink from "../../client/layouts/PrimaryLink";

const Save = () => {
  return (
    <Basic title="Save for a goal" image="/i_want_to/goal.jpg">
      <p className="pb-5">
        Whether you’re saving for your next big holiday, a house deposit, or
        planning for your retirement, we all have financial goals we are working
        towards. Knowing what your goals are, can help you decide how to best
        reach them.
      </p>
      Once you determine your savings goals, setting a budget and developing a
      savings plan can help you focus on the achievement of your financial goals
      - and potentially realise them sooner. Consider how much you need and set
      a realistic timeframe. Tools like our Budget Planner and Savings Plan
      Simulator can help you understand the impact that changing a few small
      spending habits can have on your finances.
      <PrimaryLink>Savings accounts</PrimaryLink>
      <p>
        If you are looking to earn additional or bonus interest on your funds, a
        savings /bonus savings account might be more suitable. Keep in mind that
        these accounts often have conditions that need to be met to qualify,
        such as a minimum monthly deposit and/or limited or no withdrawals per
        month. The ability to earn interest can provide you with that extra
        motivation to consciously limit your spending or contribute additional
        funds where you can to try and achieve your goal.
      </p>
      <PrimaryLink>Term deposits</PrimaryLink>
      <p>
        If you have a longer term goal and can resist the temptation of tapping
        into your funds, a term deposit might be a good option to consider. Your
        return is fixed, along with your interest rate, but you may be penalised
        if you withdraw your money before the end of the term.
      </p>
      <p>
        If you have an offset account attached to your home loan, you might
        consider putting your savings in that account. You won’t earn interest
        on your savings, but you will save interest on your home loan.
      </p>
      <p>
        Understanding your goals, means you can choose an account to help
        maximise your savings and achieve them sooner. Kick-start your savings
        goal with our range of Savings and Investment products.
      </p>
    </Basic>
  );
};

export default Save;
