// The Node REPL
// REPL is an abbreviation for read–eval–print loop. It’s a program that loops, or repeatedly cycles, through three different states: a read state where the program reads input from a user, the eval state where the program evaluates the user’s input, and the print state where the program prints out its evaluation to a console. Then it loops through these states again.
//
// When you install Node, it comes with a built-in JavaScript REPL. You can access the REPL by typing the command node (with nothing after it) into the terminal and hitting enter. A > character will show up in the terminal indicating the REPL is running and prompting your input. The Node REPL will evaluate your input line by line.
//
// By default, you indicate the input is ready for eval when you hit enter. If you’d like to type multiple lines and then have them evaluated at once you can type .editor while in the REPL. Once in “editor” mode, you can type control + d when you’re ready for the input to be evaluated. Each session of the REPL has a single shared memory; you can access any variables or functions you define until you exit the REPL.
//
// A REPL can be extremely useful for performing calculations, learning a language, and developing code. It’s a place where you can explore language features and try things out while receiving immediate feedback. Figuring out how to do this outside of the browser or a website can be really empowering.
//
// The Node environment contains a number of Node-specific global elements in addition to those built into the JavaScript language. Every Node-specific global property sits inside the the Node global object. This object contains a number of useful properties and methods that are available anywhere in the Node environment.


// $ node
// Welcome to Node.js v12.18.3.
// Type ".help" for more information.


// > global
// Object [global] {
//   gloal: [Circular],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Function]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Function]
//   }
// }
// >


// > console.log(global)
// { global: [Circular],
//     process:
//     process {
//     title: '/usr/bin/node',
//         version: 'v7.10.1',
//         moduleLoadList:
//     [ 'Binding contextify',
//         'Binding natives',
//         'NativeModule events',
//         'Binding config',
//         'Binding icu',
//         'NativeModule util',
//         'Binding uv',
//         'NativeModule buffer',
//         'Binding buffer',
//         'Binding util',
//         'NativeModule internal/util',
//         'NativeModule internal/buffer',
//         'NativeModule timers',
//         'Binding timer_wrap',
//         'NativeModule internal/linkedlist',
//         'NativeModule assert',
//         'NativeModule internal/process',
//         'NativeModule internal/process/warning',
//         'NativeModule internal/process/next_tick',
//         'NativeModule internal/process/promises',
//         'NativeModule internal/process/stdio',
//         'Binding constants',
//         'NativeModule internal/url',
//         'NativeModule internal/querystring',
//         'Binding url',
//         'NativeModule querystring',
//         'NativeModule os',
//         'Binding os',
//         'NativeModule tty',
//         'NativeModule net',
//         'NativeModule stream',
//         'NativeModule internal/streams/legacy',
//         'NativeModule _stream_readable',
//         'NativeModule internal/streams/BufferList',
//         'NativeModule _stream_writable',
//         'NativeModule _stream_duplex',
//         'NativeModule _stream_transform',
//         'NativeModule _stream_passthrough',
//         'NativeModule internal/net',
//         'Binding cares_wrap',
//         'Binding tty_wrap',
//         'Binding tcp_wrap',
//         'Binding pipe_wrap',
//         'Binding stream_wrap',
//         'NativeModule internal/repl',
//         'NativeModule readline',
//         'NativeModule internal/readline',
//         'NativeModule repl',
//         'NativeModule internal/module',
//         'NativeModule vm',
//         'NativeModule path',
//         'NativeModule fs',
//         'Binding fs',
//         'Binding fs_event_wrap',
//         'NativeModule internal/fs',
//         'NativeModule console',
//         'Binding signal_wrap',
//         'NativeModule module',
//         'NativeModule domain',
//         'NativeModule string_decoder' ],
//         versions:
//     { http_parser: '2.7.0',
//         node: '7.10.1',
//         v8: '5.5.372.43',
//         uv: '1.11.0',
//         zlib: '1.2.11',
//         ares: '1.10.1-DEV',
//         modules: '51',
//         openssl: '1.0.2k',
//         icu: '58.2',
//         unicode: '9.0',
//         cldr: '30.0.3',
//         tz: '2016j' },
//     arch: 'x64',
//         platform: 'linux',
//         release:
//     { name: 'node',
//         sourceUrl: 'https://nodejs.org/download/release/v7.10.1/node-v7.10.1.tar.gz',
//         headersUrl: 'https://nodejs.org/download/release/v7.10.1/node-v7.10.1-headers.tar.gz' },
//     argv: [ '/usr/bin/nodejs' ],
//         execArgv: [ '--max-old-space-size=200' ],
//         env:
//     { HOSTNAME: 'f7a961ed5712',
//         GEM_HOME: '/home/ccuser/.gem/ruby/2.3.0',
//         TERM: 'xterm',
//         EXPIRES_AT: '1612286201',
//         NLTK_DATA: '/home/ccuser/.nltk_data',
//         PATH: '/home/ccuser/.bin:/home/ccuser/node_modules/.bin:/home/ccuser/.gem/ruby/2.3.0/bin:/home/ccuser/.bin:/home/ccuser/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
//         _: '/usr/bin/node',
//         CODEX_RUNNER_PATH: '/var/codecademy/codex/runners',
//         PWD: '/home/ccuser/workspace/srg-blank-workspace',
//         LANG: 'en_US.UTF-8',
//         SESSION_ID: '57857705-0846-49e5-a16e-98035790cd6d',
//         TZ: 'Etc/UTC',
//         SHLVL: '3',
//         HOME: '/home/ccuser',
//         PYTHONPATH: '/var/codecademy/runner_contexts/python:' },
//     pid: 37,
//         features:
//     { debug: false,
//         uv: true,
//         ipv6: true,
//         tls_npn: true,
//         tls_alpn: true,
//         tls_sni: true,
//         tls_ocsp: true,
//         tls: true },
//     _needImmediateCallback: false,
//         execPath: '/usr/bin/nodejs',
//         debugPort: 5858,
//         _startProfilerIdleNotifier: [Function: _startProfilerIdleNotifier],
//     _stopProfilerIdleNotifier: [Function: _stopProfilerIdleNotifier],
//     _getActiveRequests: [Function: _getActiveRequests],
//     _getActiveHandles: [Function: _getActiveHandles],
//     reallyExit: [Function: reallyExit],
//     abort: [Function: abort],
//     chdir: [Function: chdir],
//     cwd: [Function: cwd],
//     umask: [Function: umask],
//     getuid: [Function: getuid],
//     geteuid: [Function: geteuid],
//     setuid: [Function: setuid],
//     seteuid: [Function: seteuid],
//     setgid: [Function: setgid],
//     setegid: [Function: setegid],
//     getgid: [Function: getgid],
//     getegid: [Function: getegid],
//     getgroups: [Function: getgroups],
//     setgroups: [Function: setgroups],
//     initgroups: [Function: initgroups],
//     _kill: [Function: _kill],
//     _debugProcess: [Function: _debugProcess],
//     _debugPause: [Function: _debugPause],
//     _debugEnd: [Function: _debugEnd],
//     hrtime: [Function: hrtime],
//     cpuUsage: [Function: cpuUsage],
//     dlopen: [Function: dlopen],
//     uptime: [Function: uptime],
//     memoryUsage: [Function: memoryUsage],
//     binding: [Function: binding],
//     _linkedBinding: [Function: _linkedBinding],
//     _events:
//     { warning: [Function],
//         newListener: [Function],
//         removeListener: [Function],
//         SIGWINCH: [Object] },
//     _rawDebug: [Function],
//         _eventsCount: 4,
//         domain: [Getter/Setter],
//         _maxListeners: undefined,
//         _fatalException: [Function],
//         _exiting: false,
//         assert: [Function],
//         config: { target_defaults: [Object], variables: [Object] },
//     emitWarning: [Function],
//         nextTick: [Function: nextTick],
//     _tickCallback: [Function: _tickDomainCallback],
//     _tickDomainCallback: [Function: _tickDomainCallback],
//     stdout: [Getter],
//         stderr: [Getter],
//         stdin: [Getter],
//         openStdin: [Function],
//         exit: [Function],
//         kill: [Function],
//         argv0: '/usr/bin/node' },
//     Buffer:
//     { [Function: Buffer]
//         poolSize: 8192,
//             from: [Function],
//         alloc: [Function],
//         allocUnsafe: [Function],
//         allocUnsafeSlow: [Function],
//         isBuffer: [Function: isBuffer],
//         compare: [Function: compare],
//         isEncoding: [Function],
//             concat: [Function],
//         byteLength: [Function: byteLength] },
//     clearImmediate: [Function],
//         clearInterval: [Function],
//     clearTimeout: [Function],
//     setImmediate: [Function],
//     setInterval: [Function],
//     setTimeout: [Function],
//     console: [Getter],
//     module:
//     Module {
//     id: '<repl>',
//         exports: {},
//     parent: undefined,
//         filename: null,
//         loaded: false,
//         children: [],
//         paths:
//     [ '/home/ccuser/workspace/srg-blank-workspace/repl/node_modules',
//         '/home/ccuser/workspace/srg-blank-workspace/node_modules',
//         '/home/ccuser/workspace/node_modules',
//         '/home/ccuser/node_modules',
//         '/home/node_modules',
//         '/node_modules',
//         '/home/ccuser/.node_modules',
//         '/home/ccuser/.node_libraries',
//         '/usr/lib/node' ] },
//     require:
//     { [Function: require]
//         resolve: [Function: resolve],
//         main: undefined,
//             extensions: { '.js': [Function], '.json': [Function], '.node': [Function] },
//         cache: {} } }
// undefined
// >


// > Object.keys(global)
// [
//   'global',
//   'clearInterval',
//   'clearTimeout',
//   'setInterval',
//   'setTimeout',
//   'queueMicrotask',
//   'clearImmediate',
//   'setImmediate'
// ]
// >


// The global object has a lot of useful properties and methods, and it’s not common to add any to it. However,
// it is just an object, so we can:
//
// > global.cat = 'meow!'
// 'meow!'
// >
