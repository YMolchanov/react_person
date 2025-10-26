// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, age, gender, isMarried, partnerName } = person;
  const partnerTitle = gender === 'male' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age"> I am {age} </p>}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerTitle}`
          : 'I am not married'}
      </p>
    </section>
  );
};
