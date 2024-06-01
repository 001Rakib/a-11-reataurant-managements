import { Accordion } from "flowbite-react";

const Blogs = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-24 px-5 md:px-0">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What is One way data binding?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              One-way data binding is a technique used in frameworks like
              Angular and React to manage the flow of data between a components
              logic often written in Javascript and the user interface UI
              elements. Unlike two-way data binding, where changes in either the
              UI or the components data can trigger updates in both places,
              one-way data binding establishes a unidirectional flow.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is NPM in node.js?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              npm, which stands for Node Package Manager, is the default tool
              for managing packages and modules in Node.js projects. It
              essentially acts like a software library for Node.js, providing a
              vast collection of reusable code components you can easily
              integrate into your applications.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Different between Mongodb database vs mySQL database.
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              T MongoDB and MySQL are both popular database management systems,
              but they differ significantly in their design, use cases, and
              features. Heres a comparison highlighting the key differences:
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <li>
                Data Model
                <li>
                  MySQL:Relational database. Stores data in tables with rows and
                  columns. Each table has a predefined schema structure that
                  defines the data types and relationships between tables.
                </li>
                <li>
                  MongoDB: NoSQL Not Only SQL database. Stores data in flexible
                  JSON-like documents. Documents can have different structures
                  and can embed other documents within them.
                </li>
              </li>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blogs;
