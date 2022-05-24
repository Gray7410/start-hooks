import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ComponentsList = ({ children }) => {
    return React.Children.map(children, (child, num) => {
        return (
            <button type="button" className="btn btn-success m-2 d-flex">
                {num + 1}
                {". "}
                {React.cloneElement(child)}
            </button>
        );
    });
};

const ChildrenExercise = () => {
    return (
        <>
            <CollapseWrapper title="Упражнение">
                <p className="mt-3">
                    У вас есть компоненты Списка. Вам необходимо к каждому из
                    них добавить порядковый номер, относительно того, как они
                    располагаются на странице. Вы можете использовать как{" "}
                    <code>React.Children.map</code> так и{" "}
                    <code>React.Children.toArray</code>
                </p>
                <Component />
                <Component />
                <Component />
            </CollapseWrapper>
            <CollapseWrapper title="Решение">
                <ComponentsList>
                    <Component />
                    <Component />
                    <Component />
                </ComponentsList>
            </CollapseWrapper>
        </>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

ChildrenExercise.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ChildrenExercise;
