import React from 'react';
import SplitterLayout from '../../../index';
import Lorem from './Lorem';

export default function() {
  return (
    <SplitterLayout primaryIndex={1} secondaryInitialSize={250}>
      <div className="my-pane">
        <h2>1st Pane</h2>
        <p>This is the 1st pane.</p>
        <pre>
          &lt;SplitterLayout primaryIndex={'{1}'} secondaryInitialSize={'{250}'}&gt;{'\n'}
          &nbsp;&nbsp;<strong>&lt;div&gt;1st&lt;/div&gt;</strong>{'\n'}
          &nbsp;&nbsp;&lt;SplitterLayout secondaryInitialSize={'{250}'}&gt;{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;SplitterLayout vertical secondaryInitialSize={'{250}'}&gt;{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;2nd&lt;/div&gt;{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SplitterLayout secondaryInitialSize={'{250}'}&gt;{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;3rd&lt;/div&gt;{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;4th&lt;/div&gt;{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;5th&lt;/div&gt;{'\n'}
          &nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
          &lt;/SplitterLayout&gt;
        </pre>
        <Lorem title="1st Pane" />
      </div>
      <SplitterLayout secondaryInitialSize={250}>
        <SplitterLayout vertical secondaryInitialSize={250}>
          <div className="my-pane">
            <h2>2nd Pane</h2>
            <p>This is the 2nd pane.</p>
            <pre>
              &lt;SplitterLayout primaryIndex={'{1}'} secondaryInitialSize={'{250}'}&gt;{'\n'}
              &nbsp;&nbsp;&lt;div&gt;1st&lt;/div&gt;{'\n'}
              &nbsp;&nbsp;&lt;SplitterLayout secondaryInitialSize={'{250}'}&gt;{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;SplitterLayout vertical secondaryInitialSize={'{250}'}&gt;{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&lt;div&gt;2nd&lt;/div&gt;</strong>{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SplitterLayout secondaryInitialSize={'{250}'}&gt;{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;3rd&lt;/div&gt;{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;4th&lt;/div&gt;{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;5th&lt;/div&gt;{'\n'}
              &nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
              &lt;/SplitterLayout&gt;
            </pre>
            <Lorem title="2nd Pane" />
          </div>
          <SplitterLayout secondaryInitialSize={250}>
            <div className="my-pane">
              <h2>3rd Pane</h2>
              <p>This is the 3rd pane.</p>
              <pre>
                &lt;SplitterLayout primaryIndex={'{1}'} secondaryInitialSize={'{250}'}&gt;{'\n'}
                &nbsp;&nbsp;&lt;div&gt;1st&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&lt;SplitterLayout secondaryInitialSize={'{250}'}&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;SplitterLayout vertical secondaryInitialSize={'{250}'}&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;2nd&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SplitterLayout secondaryInitialSize={'{250}'}&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&lt;div&gt;3rd&lt;/div&gt;</strong>{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;4th&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;5th&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
                &lt;/SplitterLayout&gt;
              </pre>
              <Lorem title="3rd Pane" />
            </div>
            <div className="my-pane">
              <h2>4th Pane</h2>
              <p>This is the 4th pane.</p>
              <pre>
                &lt;SplitterLayout primaryIndex={'{1}'} secondaryInitialSize={'{250}'}&gt;{'\n'}
                &nbsp;&nbsp;&lt;div&gt;1st&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&lt;SplitterLayout secondaryInitialSize={'{250}'}&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;SplitterLayout vertical secondaryInitialSize={'{250}'}&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;2nd&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SplitterLayout secondaryInitialSize={'{250}'}&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;3rd&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&lt;div&gt;4th&lt;/div&gt;</strong>{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;5th&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
                &lt;/SplitterLayout&gt;
              </pre>
              <Lorem title="4th Pane" />
            </div>
          </SplitterLayout>
        </SplitterLayout>
        <div className="my-pane">
          <h2>5th Pane</h2>
          <p>This is the 5th pane.</p>
          <pre>
            &lt;SplitterLayout primaryIndex={'{1}'} secondaryInitialSize={'{250}'}&gt;{'\n'}
            &nbsp;&nbsp;&lt;div&gt;1st&lt;/div&gt;{'\n'}
            &nbsp;&nbsp;&lt;SplitterLayout secondaryInitialSize={'{250}'}&gt;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;SplitterLayout vertical secondaryInitialSize={'{250}'}&gt;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;2nd&lt;/div&gt;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SplitterLayout secondaryInitialSize={'{250}'}&gt;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;3rd&lt;/div&gt;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;4th&lt;/div&gt;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>&lt;div&gt;5th&lt;/div&gt;</strong>{'\n'}
            &nbsp;&nbsp;&lt;/SplitterLayout&gt;{'\n'}
            &lt;/SplitterLayout&gt;
          </pre>
          <Lorem title="5th Pane" />
        </div>
      </SplitterLayout>
    </SplitterLayout>
  );
}
