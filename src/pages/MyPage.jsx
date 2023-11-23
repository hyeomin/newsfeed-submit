import React from "react";

import styled from "styled-components";
import Header from "../components/Header";

function MyPage() {
  const post = [
    {
      user_id: 1,

      user_name: "jiwoo",

      bread_name: "붕어빵",

      createdAt: "11",

      updatedAt: "11",
    },
  ];

  const mypost = post.filter((item) => {
    return item.user_id === 1;
  });

  return (
    <>
      <Header />
      <AvartaNameWrapper>
        <Avarta>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALgAxgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECAwQFBwj/xAA7EAABBAEBBgMGBAUDBQEAAAABAAIDBBEFBhIhMUFRE2FxFCIyUoGRB6GxwRUjM0JyU2LRJDRDssKS/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EACYRAAICAgMAAgEEAwAAAAAAAAABAgMEERIhMRNBBSIyUWFxkbH/2gAMAwEAAhEDEQA/APcUREAREQFriGtJccADJK8yqfiQ/UvxCg0igYzpTnGEuLculf8AMD0HArJ+M+1TtH0dmm1JC2zcBEhbzbGOePM8AvDNkr8kG02m2Guc0sts4N5YJx+6GT6+RWtOeI5FXIYCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKjiGtLjwAGSqrkbUTy19BuvrYNh0RZED1e7gPzKA+eNs59Q2825sQ6VE+YeJ4UY6NY04yewzkqcaT+G2laFpJs2x7bqLAHeISQyNwI+ED9SpNsfsxV2X0sV2Yfafxsznm93b0W/rhxpkw+bdH3IXEtzZWWqFfS3/ALLCq0tslsP9Jn+IWRWRDdY0eQV67ZXCIiAIiIAiLUuahTpN3rVqKL/NwTYNpVUc1LaytT06zeipXLNevG6R8jIt1uAMnBdjP0XmV38epScadoLd3HB08/Hy4AH9VqpJ+DR7gi+epPxs2lmGIqmnRZPMsc79wtnR/wAR9tNU1OCnXlrSTTPDdxtXhjPE88jgtge+IscO94bPExv7o3scsq88kAWK1YhqwPnsSNjiYMuc48lr6nqMGnxNdLvOkecRxsGXPPYLnw1JrszLerY32nMVYHMcJ6E/M7z6KOyxQ9MpbKN1yx/FKsctAx6fa3mRTuOH7+MjLMcAQHcT25LvDmuHtBA+bS5Hxt3pq7mzxjHNzDn88EfVdivK2eCKWM5Y9gcD6rFVnNBrRlREUpgIiICi4+0RG5Sj+e3Hw74Of2XYXC2kO7a0jt7Uf/Ryiteq2/6Nl6WlaOpsExp1ustqMH0Bz+y3C4AZJwO65otzS6nXlpUJ7UUG8Q8YawvIx8R/bK87ix5Wxf8AZbm9RZM0XCbf1pzN40KcbvldZJx9mq12qawz4qFV3+Ng/u1d95NUfWVFBv6O+i4LdoJ2f95pdhg+aJzZP04rZm2g06Km+ybAc1vAMaMvLvlA55W8bq59pow016dQ8lyb+vVasprwNfbtf6UAzj/I8m/Vct02o6r71x5pVXcq8LvfcP8Ae7p6N+6ywRRV2GOCJsbByawY+vmqGR+RjHqvtk0KW/S227Ub7R7RZdViPxQ1D7xHYvPH7AKyrTq1DvwVow/rK4bzz6uPFbQcqHHXl1XKnk22PuRPGEV9EH/GLW/YNlZarZSLGoERNZ13Ob/y4fVeBhSn8R9cftBtVY9nLnV658Cs0DOQDxIHmc/YLs7G/hVrOuOZNejdQpHB8SUe+8eTV38Sp11LfpVslt9EQ0LSb2sajFU02u6ed54ADl5nsF9Ifh9sPBstVEtgtn1KRv8AMlHJg+VvkuxszsvpOzNRtfSqojP98p4vefMrtnkrRGUPYLn6rqcdBgYAZbL+EULTxd5+Q81ZrGqNoNbFFH41uX+lED+Z7Ad1yalYxySWbL/FuS/1JD0HytHQBUsvLjRHS/cSV1uTL6Fd4nfcuvEtx/Bz8cGD5W9h+vVdZr/dWlGfeCv8Tme65CyW/wBU2WOC8RkfOGnB5dVbsnITpIgd8VaV8H0a47v5YWB3vHKs2Zd4Wr6vW6F8c7fRzd0/mwq1+PvcrXF+GlsdIkiIi7RWCIiApzUe2oO86kyFvjWo7DZGQh2DjkT6AFdDW9SZpOnvsEbzvhjZ8zuijWgXmzGC++MSs1B5ay0Xe9IRk8B0Zw4KtkT1BpLe/wDhtFdncjrgxfzmtc8ji3mFmaSCARgDkB0VDK1YXyrj84QWkWdNmZzlHtW2hq6fp82pSR2JaML92SeJuWt8/MLZ1v2l2kXW0yROYHiMj5sLwB+020c2z7NmZJ2tptJDwW4eR8pKmxq4ZO3N9IxNuHh9AaZqNXVqcV7T5xLXlblrmlZZ68ErhM+GN0jOLHlo3h9VEPwk025p+zDva2ljJZi+Jh5huOf1IypqeAPoqF0VCxqL8JYva2zV9o3fdc3kq+0N6grBMwSlwdyIwVh2d02G+6xUv27L5qxB3A7dDoz8J4cTwyD5grfHx/mlxT7EpKC2zLNqdeIiN7syHgI28XH6BYr+m63rlOWtTB02Kcbr7Eo98NPA7reYPmVLadCrSaG1a8cfm0cT6nmtpdan8fXW9y7K0rmyIbKfh1s/s01kleqLFoAf9RP7xB8h0UuAGQrkPJdEhLSeBXM1nUxQiDYmeLZlGIYgeZ7nsB3WTV9Ti0yv4jgXyvO7FGOb3KNs8V8r7Ft4fZk+Ijk0fK3yVPKyVStL0krrcmZ6cPhF01iXxrcvGWXv5DsB2WyXcFqh6uEi89OTm3J+lxJJaRsByqHLAHq8OytTJmDuKxUHeDtTD2sUnMPqxwI/J5V4BIwOq1YmutbRaa6v/MbVdKZy3kwOZgA+eccFbwN/PHRHb+wlyKh5IvSFIqiIgPM/xYls3dG1GOi17vZg2ElvPLyN8/Rp/MqN/hDo2px717U5pzWgYYqUUhO63PxFo6KRQanZp67qQtSh9V92Rr2FuNwcMHz6Z8lJp6zZo9wSPj7OjOCFxMvIsjyhr37/AKLcadJN/wCS6Vskjoy2d0YYcuAAO/8AdXSSRsG897WjuSoJt3ptqmK1yG7bkhH8uQOkPAnkeCiD3vkOJJZZB2c8kfYrSnB+aKkpEqPYNO1GLUTLJUG9XjO42UO4PcOePRWSaHpMlr2x+nVnWP8AULMnPmo7+GlhvsNyr1jl3wOmHBTHewqlsHVY4xY1v0jmr6vMZ316TzHHEd1zm8yew8guMNauadeDpbMs1Z5AkZJglgP9wP7LRjuvEjxI3GJHA575K07rzPHKee8C0D1VtVxUdNHUhjw+JbR6MHg8OfX1WEz/AMP1GnqQOGMPg2T3id1+jsH0yqxjEEQPxtYAfXCSsjnhfDOMxyNLHehGCqtc3XZtfRy5ra0TUYVy4+y9yS3pEbbBzZrkwTebm8M/UYP1XXXpotSSa+yg1p6B5LU1G9Dp1OWzYJDIxnHVx6ALcUb2zjcKtS25pdBWsB8rfLBAcfQnKxZLjFtBLbOYHTW7Tr1zhM4YZFnIib2Hn3KyqhI4YOc8c90Dl5iycrJOUjoJJLSKomcotDJXKpJYjiDd9xBd8LQMl3oFgifNen9n0uMSuB/mSH+nH6nqfIKR6To0NB3jPJmtO+KZ/P0A6BXsfBlb3LpEM7VHw0KmmXLgD7jn1oD/AOFh994/3Hp6Bd6rXhqxNirxNjjHJrQsyquzVTCpaiirKTl6ERFMahERAeY7d0TQ1WeXd/6fUG5Dh0kAwR9Rj7LrbL3RZ0KqZHZkYDE8u55bwz+ik2t6TBrOnSU7XBrhlrhzY7oQoZpVKXQ4zplzjMJHPD8YbKD1b/wuV+Qp/TyRfruU61B+o62r1INT02elI7AlZgO7HoV5LHptuTUZaEjS2WAnxscPT6HmvVSuff0uO5IJ2SGCyBu+KBneHYjqquFkqiWpeM212c3Yqv8Aw6zcjw3LmMPBSSSRz1paZR9hjcJJjLM85fJu4z2GFuEKDJsVlrlHwz9kY1nQ7MluSzRa2RsnF8Zdgg9wmk6BOZmS6g0RRxuDhEDkuI5Z/VSgKjiGtLnEAAZJKx80uOiZXzUeO+i0tLeXwqi58msNdbr1qcJseM7cE29uxMdyGT5kELegEsxy11aRgeWPMMmd0gclo65JctdEHJN6NnQp3VNd3HECC/GRjtKz/luf/wAqXKE2ack0ZbGSydjhLC/oHA8D+31Uo0i83UaEVgDdf8MjOrHjg5v0K7WBdzr4v1FS6Ons31ZNGyaJ8cgDmPBDgeoV6oeS6BCQT/sJZaEpO/Wd7mf74z8J/b6K5z/5260jAGVu7cUtyKHVom+/X9yYfNGf+DxUflmLYpHM4vDTujucLgZePwt68ZdrnuJ032I4g0ni53wMaMucfILoUtCsXgJNSLoIDx9nY73nf5H9gtjZOhTFGDUGO8eeZgJmeOI8gOmFIeqv4+FCGpS7ZBZa30YateKrE2GvE2ONvJrBgBZ0RX0tEIREWQEREBTPBa9i3XrwmWaeKOMf3OdwXN2luT1aTBC1gbO/wnyvPCMHkcDnk8Pqovpop17Fan7M2exHGMSHg0AcN7B6+iqX5MaevWbxg5Emfr/jA/w2nNYx/wCR48Nn3K5+oR39VhMV2SvHGR8ELN4tPcOPVbniEuw7p0HJFyrvyE59LosRqS9OXV0+avG6J8z5o2AeG9594jzVxbhdJWPjY7mqPLZMjQCLYfXLfg4hYi09j9lkyW5XL12SxLWNDTxvW7A93lhrM+8ePl+q6mFparG3w47LmZ9mkbJw57vX8uP0W0GuXZh+dGOTwIxK0142McQZA3gHdvT6KtDei1qOSu7ditEiaEABvusOHevAK/VNKdMIJ6crWtbM2XdPEOb2+3H6LNBAIHB/N/EDyytnJtbbNeK+jsEDryUc0vVHbO7X2qd0kUdTlEschPBr3AD9Rj7LuVpd8bruY7Kl2jWuw+HdrxzsznDunotsa/4bNmJx5LRJx+StnkjiidJK9rWNGXOccABcbZy28Mk02y8usVh/LceckX9rv2Poodr+oXtTvzQXQ6GGB5aKueB48HO75+y9A74qvmiooNvRvbQ7SO1YSU6OWUCC2SYjjL3DfLzXHa7caGsbgNAAyfsrN7AwccB9AFu6RpN3WXj2bMNUfHYeOf8AgOvqubL5MifRZSVaOx+H9xzbN7TXZcxpE0Z6NB5j78VNVz9H0mrpNfwaseMnL3ni557kroLrVxcYpMqyab2iqIi3NQiIgCIiA4W01SWWmLUO+51QOeIWt3hIT5dxzC4NcVhIJbENhjAf5XjV3DAzzKnSoRkY6dlVvxYXPb6ZJCbiRdt2pKfctQHy8QZ/NbDPeGW8R5Lrz6fTsDE1WF/+TAtE7M6TvEx1fCJ/03Fv6KjL8V/EiRX/AMo07MrYIHzPB3WDJ9FeHBzA5vFpGQfVXz7LUpY9wT3WNxjDbDuK5+jgxVPY35L6j3Qu3jxwOR+2FUyMKVMeTJI2KT0jeVCFVFSJS0sb8oQsjIILAQehVyIDSr0vZ4n12PPgN/pNPEsHb0Vrm7pw4Hgt4jsrMA/HxW3ILow1G4c491tK0cPhaAEWrBpauHxQfxCqd2zTBlj/ANwHxMPqMj7K67Vq7X6LW1bTCGWXMzG535sctt4a+NzHjLXDBHkoto9iPYfUrTLdgu0ewcs90l0L+g+vL7Lq/j7lp1T8K9kWnyRxrL2+9BZY6KSN4a9rubHDlnyXomyOvQavU8L3I7UA3ZYm/kR5LzfbDXoNeusmq1TA1g3TI7g6UdMjsuPQ1GxplyG7UfuzRnhk43x8p75VqqSqm0u0ZlHlHb9PoDh3VVo6NddqWm1rjoXwmZgcY3jBaVvLoIqhERZAREQBERAEREAREQFFGJ2eBtBdYBwmiZL6kcD+yk64Orgt1yo/Aw6B7Se/IqpmQ5UtG9b1JFqFVcFReaaLxTKFUIVAUBcChCtVwKANVCrsIgLcqL7T1xcjtVjg77MAnoehUmkcGNJcQMDqo3O4yTOeepUtX7gRXZHRxtBbNaS3HWc1gPEZc/vujlwXqWibIaRpBD4q4mn6zTe87P15fReV6VoWu3LUljTKco8O1J4U4cGhuHHqSvaNJF3+H1/4n4fte6PF8L4d7yXoceK4712VLW/5NsdMBXIitEIREQBERAEREAREQBERAUXC2jJhtaZYA4CcxuPYOGP1XdWlq9Eajp8tYu3HHix/yuHEFR2R5Rcf5Mp6ZzXlW5XJi1fw5pat2MssxcJW/wD0O4KzP1Ou3gN7K8vOuUZNNF9eHRWN8sQ5uaPquJZ1GWT3Qd1vTHVc+e1HCwSWJmNB5ZPP07pGtvwySgTwnlK0q8OB5EH6qMRNsTtD4KN17DxDm13AH74Vj7Ps792wZYD2na5n68FI8eaW9GvKJKw4dx91imtwxAlzgceajxkeQPfdg8uPNW5J6E+pWnx69Njfu3jY91vBq0geIKtBVJA97RFXbvzS+5G3ue6khHtJGG9Il2xEe5s9C/8A1ZJJPu4rvBaml1Bp+nVqjTveDG1hPc91thelitLRQb+yqIi2MBERAEREAREQBERAEREAREQHJ1nQ6mrsaZw+Odn9OeI4e369R5FQ/WdI1jR677J9lu12EZc0mKQDOMkYIP5L0Va2oVGXqU9WX4ZWFpPZQWUQs9XZvGco+HkdvUtREbzXirQbrSQ6R5kcSB0aAP1XoWzOz9KrBDflDrV2VgcbE2CW5HJo5NHooLY02agJ6l6nKLTJT7OBjFlrhj3OmcnlzXqOk13VdNq13Ah0cTWnPcDqq+JXxb2u0SWy3rTNv6fZWzRRzMLJY2vaRgtcAcrIivkBHbWyOnSOL6hmoudz9nd7ue+6ct/Jc2TZDUY3HwdRrSs6eLXLXfdrv2UzRQyorn7E2U5L7PKdROoaZqslK17L7jGvDmh2Xg57nuCrdIm9m12lafIZJRM0Pc48Q13DH5qWbdaE/UIWXK0DppommOWNnxSRnjw8wcEfVRStXhuPpPqwPfPLiKaDOHxuHHJB4jkfuqM6XVcnFdE6nyj2erg/qqqg5BVXUKwREQBERAEREAREQBERAEREAREQBERAWOYHEFzWnByM8cK9EQBERAEREBQjIIWv7FW9rFs1ovaAN3xiwb+PVEQGyiIgCIiAIiIAiIgCIiA//9k="
            alt="이미지 없음"
          />
        </Avarta>
        <p>이름</p>
      </AvartaNameWrapper>
      <MypageBody>
        <InputWrapper>
          <input />
        </InputWrapper>
        <BodyWrapper>
          {mypost.map((item) => {
            return (
              <>
                <p>{item.user_id}</p>
                <p>{item.user_name}</p>
                <p>{item.bread_name}</p>
                <p>{item.createdAt}</p>
                <p>{item.updatedAt}</p>
              </>
            );
          })}
        </BodyWrapper>
      </MypageBody>
    </>
  );
}

export default MyPage;

const AvartaNameWrapper = styled.div`
  background-color: #fff1f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
const Avarta = styled.figure`
  border-radius: 50%;
`;

const MypageBody = styled.body`
  background-color: #fff1f0;
  height: 800px;
`;

const HeadWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px, 30px;
`;
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
