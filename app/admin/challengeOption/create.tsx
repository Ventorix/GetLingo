import { BooleanInput, Create, ReferenceInput, SimpleForm, TextInput, required } from 'react-admin';

const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source='text' validate={[required()]} label='Text' />
        <BooleanInput source='correct' validate={[required()]} label='Correct option' />
        <ReferenceInput source='challengeId' reference='challenges' />
        <TextInput source='imageSrc' label='Image URL' />
        <TextInput source='audioSrc' label='Audio URL' />
      </SimpleForm>
    </Create>
  );
};

export default ChallengeOptionCreate;
