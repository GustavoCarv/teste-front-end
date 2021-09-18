import {
  BoxComment,
  BoxCommentInfo,
  BoxPersonalInfo,
  BoxNameAndProfession,
} from "./styled";

function CommentsBox() {
  return (
    <BoxCommentInfo>
      <p>.</p>
      <BoxPersonalInfo>
        Foto
        <BoxNameAndProfession>
          <h1>Felipe Salmim</h1> <p>Designer</p>
        </BoxNameAndProfession>
      </BoxPersonalInfo>
      <BoxComment>
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for ‘lorem ipsum’{" "}
        </p>
      </BoxComment>
      <p>.</p>
    </BoxCommentInfo>
  );
}

export default CommentsBox;
