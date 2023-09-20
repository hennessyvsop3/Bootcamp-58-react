import React from "react";
import {
  Flex,
  FlexContainer,
  StyledButton,
  StyledCounter,
} from "./Counter.styled";

export class Counter extends React.Component {

	static defaultProps = {
		title: 'Default props from component'
	}
  state = {
    counter: 0,
    step: 1,
  };

  increment = () => {
    this.setState(prevState => ({ counter: prevState.counter + prevState.step }));
  };
  decrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - prevState.step }));
  };
  reset = () => {
    this.setState({ counter: 0, step: 1 });
  };
	
	handleChangeStep = (e) => {
		this.setState({step: +e.target.value})
	}

  render() {
    const { title } = this.props;
    const { counter, step } = this.state;
    return (
      <FlexContainer>
        <StyledCounter>
          <h2>{title}</h2>
          <h1>{counter}</h1>
          <input type="text" value={step} onChange={this.handleChangeStep} />
          <Flex>
            <StyledButton onClick={this.decrement}>minus</StyledButton>
            <StyledButton onClick={this.reset}>reset</StyledButton>
            <StyledButton onClick={this.increment}>plus</StyledButton>
          </Flex>
        </StyledCounter>
      </FlexContainer>
    );
  }
}

// export const Counter = () => {
//   const sayHi = (e) => {
//     console.log(e.target.outerText);
//     console.log("Hello " + e.target.outerText);
//   };
//   const mouseMove = () => {
//     console.log("You enter end move on a button");
//   };

// 	const griting = () => {

// 	}
//   return (
//     <FlexContainer>
//       <StyledCounter>
//         <h1>{0}</h1>
//         <Flex>
//           <StyledButton onClick={sayHi}>minus</StyledButton>
//           <StyledButton onClick={sayHi}>reset</StyledButton>
//           <StyledButton onClick={sayHi}>plus</StyledButton>
//         </Flex>
//       </StyledCounter>
//     </FlexContainer>
//   );
// };
