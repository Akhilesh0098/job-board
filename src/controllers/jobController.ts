import { Request, Response } from 'express';
import pool from '../config/db';
import { Job } from '../types/job';

export const createJob = async (req: Request, res: Response) => {
  try {
    const { title, company, location, salary, description }: Job = req.body;
    const [result] = await pool.execute(
      'INSERT INTO jobs (title, company, location, salary, description) VALUES (?, ?, ?, ?, ?)',
      [title, company, location, salary, description]
    );
    res.status(201).json({ message: 'Job created successfully', id: result });
  } catch (error) {
    res.status(500).json({ error: 'Error creating job' });
  }
};

export const getAllJobs = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM jobs');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching jobs' });
  }
};

export const getJobById = async (req: Request, res: Response): Promise<void> => {
  try {
    const [rows]: any = await pool.execute('SELECT * FROM jobs WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      res.status(404).json({ error: 'Job not found' });
      return;
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching job' });
  }
};

export const updateJob = async (req: Request, res: Response) => {
  try {
    const { title, company, location, salary, description }: Job = req.body;
    const [result]: any = await pool.execute(
      'UPDATE jobs SET title = ?, company = ?, location = ?, salary = ?, description = ? WHERE id = ?',
      [title, company, location, salary, description, req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json({ message: 'Job updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating job' });
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const [result]: any = await pool.execute('DELETE FROM jobs WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting job' });
  }
}; 