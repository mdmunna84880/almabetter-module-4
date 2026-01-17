/**
 * @swagger
 * /subscribers:
 *   get:
 *     summary: Get all subscribers
 *     responses:
 *       200:
 *         description: List of all subscribers
 */

/**
 * @swagger
 * /subscribers/names:
 *   get:
 *     summary: Get subscriber names and channels
 *     responses:
 *       200:
 *         description: Subscriber names and channels
 */

/**
 * @swagger
 * /subscribers/{id}:
 *   get:
 *     summary: Get subscriber by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subscriber found
 *       400:
 *         description: Subscriber not found
 */
