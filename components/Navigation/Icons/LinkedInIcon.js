import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Icon = styled.svg`
  width: 100%;
  height: 100%;
  cursor: pointer;

  & ellipse,
  & path {
    transition: fill 0.3s ease-out;
  }

  &:hover ellipse {
    fill: #c13584;
  }
  &:hover path {
    fill: #75a8db;
  }
`;
const InstagramIcon = () => {
  return (
    <Wrapper>
      <Icon
        alt="LinkedIn"
        priority={true}
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.5833 0H10.4167C4.66458 0 0 4.66458 0 10.4167V39.5833C0 45.3354 4.66458 50 10.4167 50H39.5833C45.3375 50 50 45.3354 50 39.5833V10.4167C50 4.66458 45.3375 0 39.5833 0ZM16.6667 39.5833H10.4167V16.6667H16.6667V39.5833ZM13.5417 14.025C11.5292 14.025 9.89583 12.3792 9.89583 10.35C9.89583 8.32083 11.5292 6.675 13.5417 6.675C15.5542 6.675 17.1875 8.32083 17.1875 10.35C17.1875 12.3792 15.5562 14.025 13.5417 14.025ZM41.6667 39.5833H35.4167V27.9083C35.4167 20.8917 27.0833 21.4229 27.0833 27.9083V39.5833H20.8333V16.6667H27.0833V20.3437C29.9917 14.9563 41.6667 14.5583 41.6667 25.5021V39.5833Z"
          fill="#0B5FBB"
        />
      </Icon>
    </Wrapper>
  );
};
export default InstagramIcon;
