import styled from "styled-components";

const Styles = styled.div`
  padding: 1rem;
  table {
    margin: auto;
    table-layout: fixed;
    width: 90%;
    border-spacing: 0;
    border-collapse: collapse;
    transition: background-color 0.5s ease;
    thead {
      tr {
        :first-child {
          background-color: darkblue;
          color: white;
          th {
            :first-child {
              text-align: left;
            }
            :last-child {
              text-align: right;
            }
          }
        }
      }
    }
    th,
    td {
      margin: 10px;
      padding: 0.5rem;
      height: 30px;
      text-align: center;
      width: 30%;
      :first-child {
        width: 30%;
        input {
          width: auto;
          text-align: left;
        }
      }
      :last-child {
        width: 10%;
        text-align: right;
      }
      input {
        width: 30%;
        text-align: center;
        background-color: inherit;
        font-size: 1rem;
        padding: 5px;
        margin: 0;
        border: 0;
        border-radius: 5px;
        :hover {
          color: white;
          background-color: darkblue;
        }
      }
    }
  }
`;

export default Styles; 