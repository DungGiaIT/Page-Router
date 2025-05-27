// import styles from './alert.module.css';
import { clsx } from 'clsx';
 
export default function Alert({ children, type }) {
  return (
    <div
      className={clsx(
        'p-4 rounded-md',
        {
          'bg-emerald-100 text-emerald-800': type === 'success',
          'bg-red-100 text-red-800': type === 'error',
        }
      )}
    >
      {children}
    </div>
  );
}