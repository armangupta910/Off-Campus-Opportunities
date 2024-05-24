// src/components/JobPostings.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const JobPostings = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    const fetchJobPostings = async () => {
      const jobPostingsSnapshot = await getDocs(collection(db, 'jobPostings'));
      const jobPostingsData = jobPostingsSnapshot.docs.map(doc => doc.data());
      setJobPostings(jobPostingsData);
    };

    fetchJobPostings();
  }, []);

  return (
    <div>
      <h1>Job Postings</h1>
      <table>
        <thead>
          <tr>
            <th>Organization</th>
            <th>Job Title</th>
            <th>Post Title</th>
            <th>Package</th>
            <th>Application Link</th>
          </tr>
        </thead>
        <tbody>
          {jobPostings.map((job, index) => (
            <tr key={index}>
              <td>{job.organization}</td>
              <td>{job.jobTitle}</td>
              <td>{job.postTitle}</td>
              <td>{job.package}</td>
              <td><a href={job.applicationLink} target="_blank" rel="noopener noreferrer">Apply</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobPostings;
