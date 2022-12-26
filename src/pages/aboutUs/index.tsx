import React from "react";
import * as S from "./styles";

export const AboutUs = () => {
  return (
    <S.Container>
      <S.WrapperImage>
        <S.Image src={require("../../images/obra.jpeg")} alt="obra" />
      </S.WrapperImage>
      <S.ContainerInformation>
        <S.WrapperInformation>
          <S.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            lacinia tincidunt ligula at tincidunt. Ut tincidunt ipsum leo, at
            vestibulum quam porta non. Donec vitae justo imperdiet, posuere
            massa at, dignissim eros. In egestas vulputate tempus. Vestibulum in
            mi non justo tristique ultricies. Sed eget egestas justo. Nullam
            malesuada ipsum metus, ut sodales purus rhoncus vel. Aliquam sit
            amet justo sit amet ipsum tincidunt iaculis. Donec eget justo
            vulputate, faucibus dui at, consectetur libero. Sed consequat
            feugiat mi, at luctus felis elementum sed. Sed mattis iaculis
            hendrerit. Pellentesque ut felis vestibulum tortor luctus dictum at
            ut lectus. Quisque et enim lacinia, dictum ligula vitae, ultrices
            nibh. Maecenas suscipit odio sapien, non semper metus semper eu. Sed
            facilisis imperdiet tempus. Phasellus faucibus enim at viverra
            luctus. Aenean non felis eu lectus elementum accumsan. Integer
            cursus mollis nunc, vel sagittis justo placerat vitae. Pellentesque
            eu mauris ullamcorper, vestibulum nibh eget, pulvinar leo. Nullam
            turpis arcu, blandit sit amet egestas sed, pulvinar non risus.
          </S.Content>
        </S.WrapperInformation>{" "}
        <S.WrapperInformation>
          <S.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            lacinia tincidunt ligula at tincidunt. Ut tincidunt ipsum leo, at
            vestibulum quam porta non. Donec vitae justo imperdiet, posuere
            massa at, dignissim eros. In egestas vulputate tempus. Vestibulum in
            mi non justo tristique ultricies. Sed eget egestas justo. Nullam
            malesuada ipsum metus, ut sodales purus rhoncus vel. Aliquam sit
            amet justo sit amet ipsum tincidunt iaculis. Donec eget justo
            vulputate, faucibus dui at, consectetur libero. Sed consequat
            feugiat mi, at luctus felis elementum sed. Sed mattis iaculis
            hendrerit. Pellentesque ut felis vestibulum tortor luctus dictum at
            ut lectus. Quisque et enim lacinia, dictum ligula vitae, ultrices
            nibh. Maecenas suscipit odio sapien, non semper metus semper eu. Sed
            facilisis imperdiet tempus. Phasellus faucibus enim at viverra
            luctus. Aenean non felis eu lectus elementum accumsan. Integer
            cursus mollis nunc, vel sagittis justo placerat vitae. Pellentesque
            eu mauris ullamcorper, vestibulum nibh eget, pulvinar leo. Nullam
            turpis arcu, blandit sit amet egestas sed, pulvinar non risus.
          </S.Content>
        </S.WrapperInformation>
      </S.ContainerInformation>
    </S.Container>
  );
};
