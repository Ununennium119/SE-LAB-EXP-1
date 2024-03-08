import { format } from 'date-fns';
import { motion } from 'framer-motion';
import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import CheckButton from './CheckButton';
import TodoModal from './TodoModal';

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoItem({ todo }) {
  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
          <CheckButton />
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>
              {format(new Date(todo.time), 'p, MM/dd/yyyy')}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            tabIndex={0}
            role="button"
          >
            <MdEdit />
          </div>
        </div>
      </motion.div>
      <TodoModal
        type="update"
        todo={todo}
      />
    </>
  );
}

export default TodoItem;
