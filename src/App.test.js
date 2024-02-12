import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('App component', () => {
  test('renders App component', () => {
    render(<App />);
    const headerElement = screen.getByText(/New Post/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders QuestionForm component when Question button is clicked', () => {
    render(<App />);
    const questionButton = screen.getByText(/Question/i);
    fireEvent.click(questionButton);
    const titleInput = screen.getByPlaceholderText(/Start your question with how, what, why, etc./i);
    expect(titleInput).toBeInTheDocument();
  });

  test('renders ArticleForm component when Article button is clicked', () => {
    render(<App />);
    const articleButton = screen.getByText(/Article/i);
    fireEvent.click(articleButton);
    const articleTitleInput = screen.getByPlaceholderText(/Enter a descriptive title/i);
    expect(articleTitleInput).toBeInTheDocument();
  });

  test('inputs in QuestionForm can be typed into', () => {
    render(<App />);
    const questionButton = screen.getByText(/Question/i);
    fireEvent.click(questionButton);

    const titleInput = screen.getByPlaceholderText(/Start your question with how, what, why, etc./i);
    fireEvent.change(titleInput, { target: { value: 'How to test React components?' } });
    expect(titleInput.value).toBe('How to test React components?');

    const descriptionInput = screen.getByLabelText(/Describe your problem/i);
    fireEvent.change(descriptionInput, { target: { value: 'I want to know the best practices for testing React components.' } });
    expect(descriptionInput.value).toBe('I want to know the best practices for testing React components.');

    const tagsInput = screen.getByPlaceholderText(/Please add up to 3 tags/i);
    fireEvent.change(tagsInput, { target: { value: 'react, testing, jest' } });
    expect(tagsInput.value).toBe('react, testing, jest');
  });

  test('inputs in ArticleForm can be typed into', () => {
    render(<App />);
    const articleButton = screen.getByText(/Article/i);
    fireEvent.click(articleButton);

    const titleInput = screen.getByPlaceholderText(/Enter a descriptive title/i);
    fireEvent.change(titleInput, { target: { value: 'Introduction to React Testing Library' } });
    expect(titleInput.value).toBe('Introduction to React Testing Library');

    const abstractInput = screen.getByLabelText(/Abstract/i);
    fireEvent.change(abstractInput, { target: { value: 'This article provides an overview of React Testing Library and its usage.' } });
    expect(abstractInput.value).toBe('This article provides an overview of React Testing Library and its usage.');

    const articleTextInput = screen.getByLabelText(/Article Text/i);
    fireEvent.change(articleTextInput, { target: { value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' } });
    expect(articleTextInput.value).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

    const tagsInput = screen.getByPlaceholderText(/Please add up to 3 tags/i);
    fireEvent.change(tagsInput, { target: { value: 'react, testing, library' } });
    expect(tagsInput.value).toBe('react, testing, library');
  });

  test('PostButton component is rendered', () => {
    render(<App />);
    const postButton = screen.getByText(/Post/i);
    expect(postButton).toBeInTheDocument();
  });
});