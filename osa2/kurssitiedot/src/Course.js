const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
    const sum = parts.map(p => p.exercises).reduce((s, p) => s + p, 0)

    return (
        <p><b>Number of exercises {sum}</b></p>
    )
}

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course