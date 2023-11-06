import '../../index.css';
import css from '../Statistics/statistics.module.css';
import { getRandomHexColor } from './labelRandomColor'

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {/* <h2 className={css.title}>{title}</h2> */}
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(el => (
          <li
            key={el.id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

